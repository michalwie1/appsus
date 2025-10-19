

import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"
// import { MailDetails } from "./MailDetails.jsx"
import { MailHeader } from "../cmps/MailHeader.jsx"
import { MailCompose } from "../cmps/MailCompose.jsx"
import { Loader } from "../cmps/Loader.jsx"
import { showErrorMsg, showSuccessMsg } from "../../../services/event-bus.service.js"
import { MailCategories } from "../cmps/MailCategories.jsx"


const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM

export function MailIndex() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [mails, setMails] = useState([])
    const [unreadCounter, setUnreadCounter] = useState(mailService.unreadMailCounter())
    const [category, setCategory] = useState('primary')
    // const [openMailId, setOpenMailId] = useState(null)
    
    const [filterBy, setFilterBy] = useState(mailService.getFilterFromParams(searchParams))

    // const categories = {primary: mailService.getCategory('primary'), 
    //                     social: mailService.getCategory('social'), 
    //                     updates: mailService.getCategory('updates'),
    //                     promotions: mailService.getCategory('promotions')
    //                     }

    // console.log(mailService.getMailsCategoryCount())

    useEffect(() => {
        setSearchParams(filterBy)
        loadMails()
    }, [filterBy,unreadCounter,category])
     
        
    function loadMails(){
        mailService.query(filterBy)
            .then(setMails)
            .catch(err => console.log('err:', err))
    }

    function onRemoveMail(mailId) {
        // mailService.remove(mailId)
        mailService.get(mailId)
            .then((removedMail) => {
                console.log(removedMail)
                removedMail.removedAt = Date.now()
                if (removedMail.status === 'inbox') {
                    removedMail.status = 'trash'
                }
                else if (removedMail.status === 'trash') { //SHOULD CHECK
                    mailService.remove(removedMail.id)
                    .then(() => {
                        setMails(prevMails => prevMails.filter(mail => mail.id !== mailId)) 
                        showSuccessMsg('Mail deleted successfully!')
                     })
                }
                
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg(`Cannot remove mail - ${mailId}`)
            })
    }
    
    function onMailActionToggle(ev, mailId, action){
        ev.stopPropagation()
        
        setMails(prevMails =>
            prevMails.map(mail =>
                mail.id === mailId ? { ...mail, [action]: !mail[action] } : mail
            )
        )
       
        mailService.get(mailId)
            .then(mail => {
                mail.action = !mail.action
                return mailService.save(mail)
            })
            .catch(err => console.log('err:', err))

        // if (action === 'isRead') setUnreadCounter(mailService.unreadMailCounter())
    }

    function onSetFilterBy(newFilterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...newFilterBy }))
    }

    function onComposeClick() {
        setSearchParams({ compose: 'new' })
    }

    function onCategoryChange({ target }, categoryName){
        // classList.remove SHOULD REMOVE ALL CLICKED CLASS FROM THE OTHERS
        target.classList.toggle('clicked') //CHECK IF TOGGLE ONLY CLICKED
        
        console.log(target.classList)
        setCategory(categoryName)
    }

    return (
        <section className="mail-index main-layout">

            <MailHeader 
                onSetFilterBy={onSetFilterBy} 
                defaultFilter={filterBy}
            />

             <button onClick={onComposeClick}>
                    <span 
                    className="material-symbols-outlined" 
                      >edit
                </span>
                Compose
            </button>

            {searchParams.get('compose') === 'new' && (
                <MailCompose setSearchParams={setSearchParams} />
            )} 


            {!mails.length && <Loader />}
            
            <div>header-actions</div>
            <MailCategories
                onCategoryChange = {onCategoryChange}
            />

            <div>folders
                <p>Inbox {mailService.unreadMailCounter()}</p>
                {/* <MailCategories mails={mails}/> */}
            </div>

              <MailList
                   categoryMails = {mailService.getCategory(category)}
                   onRemoveMail = {onRemoveMail}
                   onMailActionToggle= {onMailActionToggle}
                   />

            <div>bottom</div>

        </section>
    )
}