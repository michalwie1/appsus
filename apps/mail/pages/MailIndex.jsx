

import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"
// import { MailDetails } from "./MailDetails.jsx"
import { MailHeader } from "../cmps/MailHeader.jsx"
import { MailCompose } from "../cmps/MailNew.jsx"
import { Loader } from "../cmps/Loader.jsx"
import { showErrorMsg, showSuccessMsg } from "../../../services/event-bus.service.js"
import { MailCategories } from "../cmps/MailCategories.jsx"
import { MailStatus } from "../cmps/MailStatus.jsx"


const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM

export function MailIndex() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [mails, setMails] = useState([])
    const [unreadCounter, setUnreadCounter] = useState(mailService.unreadMailCounter())
    const [category, setCategory] = useState('primary')
    const [status, setStatus] = useState('inbox')
    // const [openMailId, setOpenMailId] = useState(null)
    const [filterBy, setFilterBy] = useState(mailService.getFilterFromParams(searchParams))

    useEffect(() => {
        setSearchParams(filterBy)
        loadMails()
    }, [filterBy,unreadCounter])
     
        
    function loadMails(){
        mailService.query(filterBy)
            .then(setMails)
            .catch(err => console.log('err:', err))
    }

    function onRemoveMail(mailId) {
        mailService.get(mailId)
            .then((mail) => {
            if (mail.status === 'trash') {

                mailService.remove(mailId)
                .then(() => {
                    setMails(prevMails => prevMails.filter(mail => mail.id !== mailId))
                    showSuccessMsg('Mail deleted permanently!')
                })
                .catch(err => {
                    console.log('err:', err)
                    showErrorMsg(`Cannot remove mail - ${mailId}`)
                })
            } else {
                const updatedMail = { ...mail, status: 'trash', removedAt: Date.now() }
                mailService.save(updatedMail)
                .then(() => {
                    setMails(prevMails => prevMails.map(mail => mail.id === mailId ? updatedMail : mail))
                    showSuccessMsg('Mail moved to trash!')
                })
                .catch(err => {
                    console.log('err:', err)
                    showErrorMsg(`Cannot move mail to trash - ${mailId}`)})
            }
            })
            .catch(err => {
            console.error('err:', err)
            showErrorMsg(`Cannot remove mail - ${mailId}`)
            })
    }

    function onMailActionToggle(ev, mailId, action){
        ev.stopPropagation()
        console.log(mailId)
        setMails(prevMails =>
            prevMails.map(mail =>
                mail.id === mailId ? { ...mail, [action]: !mail[action] } : mail
            )
        )
       
        mailService.get(mailId)
            .then(mail => {
                mail[action] = !mail[action]
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

    function onCategoryChange({ currentTarget }, categoryName){
        const elClicked = document.querySelectorAll('.category.clicked')
        elClicked.forEach(el => el.classList.remove('clicked'))

        currentTarget.classList.toggle('clicked')
        setCategory(categoryName)
        
    }

    function onStatusChange({ currentTarget }, statusName){
        const elClicked = document.querySelectorAll('.status.clicked')
        elClicked.forEach(el => el.classList.remove('clicked'))

        currentTarget.classList.toggle('clicked')
        
        setStatus(statusName)
    }

    const categoryMails = mails.filter(mail =>
        mail.categories.map(category => category.toLowerCase()).includes(category))
        

    return (
        <section className="mail-index">

            <MailHeader 
                onSetFilterBy={onSetFilterBy} 
                defaultFilter={filterBy}
            />
    <div className="mail-top">
        <div className="mail-compose">
             <button onClick={onComposeClick}>
                    <span 
                    className="material-symbols-outlined" 
                      >edit
                </span>
                Compose
            </button>
        </div>

            {/* <div>header-actions</div> */}
            <MailCategories
                onCategoryChange = {onCategoryChange}
            />
           </div>

              {searchParams.get('compose') === 'new' && (
                <MailCompose setSearchParams={setSearchParams} />
            )} 

        <div className="mail-main">
                <MailStatus
                onStatusChange = {onStatusChange} />
                {/* <p>Inbox {mailService.unreadMailCounter()}</p> */}
                {/* <MailCategories mails={mails}/> */}
           
            {!mails.length && <Loader />}

              <MailList
                    categoryMails = {categoryMails}

                   onRemoveMail = {onRemoveMail}
                   onMailActionToggle= {onMailActionToggle}
                   />
            </div>

            {/* <div>bottom</div>  */}

        </section>
    )
}