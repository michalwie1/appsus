const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"
import { MailList } from "../cmps/MailList.jsx"
import { MailHeader } from "../cmps/MailHeader.jsx"
import { MailNew } from "../cmps/MailNew.jsx"
import { showErrorMsg, showSuccessMsg } from "../../../services/event-bus.service.js"
import { MailCategories } from "../cmps/MailCategories.jsx"
import { SideNav } from "../../../cmps/SideNav.jsx"
// import { MailStatus } from "../cmps/MailStatus.jsx"

export function MailIndex() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [mails, setMails] = useState([])
    const [unreadCounter, setUnreadCounter] = useState(0)
    const [category, setCategory] = useState('primary')
    const [status, setStatus] = useState('inbox')
    // const [openMailId, setOpenMailId] = useState(null)
    const [filterBy, setFilterBy] = useState(mailService.getFilterFromParams(searchParams))
    // const [readToggle, setReadToggle] = useState(false)

    useEffect(() => {
        setSearchParams(filterBy)
        loadMails()
    }, [filterBy])

    useEffect(() => {
        setUnreadCounter(mailService.unreadMailCounter(mails))
        loadMails()
    }, [mails])
     
        
    function loadMails(){
        mailService.query(filterBy)
            .then(setMails)
            .catch(err => console.log('err:', err))
    }

function onRemoveMail(mailId) {
    mailService.get(mailId)
        .then(mail => {
            if (mail.status === 'trash') {
                mailService.remove(mailId)
                    .then(() => {
                        setMails(prevMails => prevMails.filter(m => m.id !== mailId))
                        showSuccessMsg('Mail deleted permanently!')
                    })
                    .catch(err => {
                        console.log('err:', err)
                        showErrorMsg(`Cannot remove mail - ${mailId}`)
                    })
            } 
            else {
                const updatedMail = { ...mail, status: 'trash', removedAt: Date.now() }

                mailService.save(updatedMail)
                    .then(() => {
                        setMails(prevMails => prevMails.filter(m => m.id !== mailId))
                        showSuccessMsg('Mail moved to trash!')
                    })
                    .catch(err => {
                        console.log('err:', err)
                        showErrorMsg(`Cannot move mail to trash - ${mailId}`)
                    })
            }
        })
        .catch(err => {
            console.error('err:', err)
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

    // const categoryMails = mails.filter(mail =>
    //     mail.categories.map(category => category.toLowerCase()).includes(category))
        
    const categoryMails = getMailsByFolder(status)
    
    function getMailsByFolder(statusName){
        if (!mails || !mails.length) return []
        
        if (statusName === 'inbox') {
            return mails.filter(mail =>
            mail.categories.map(cat => cat.toLowerCase()).includes(category.toLowerCase()))
        }

        return mails.filter(mail => {
            switch (statusName) {
                case 'star':
                    return mail.isStar
                case 'important':
                    return mail.isImportant
                case 'trash':
                    return !!mail.removedAt
                case 'sent':
                    return mail.status && mail.status.toLowerCase() === 'sent'
                case 'drafts':
                    return mail.status && mail.status.toLowerCase() === 'drafts'
                default:
                    return mail.status && mail.status.toLowerCase() === statusName.toLowerCase()
            }
        })

        .sort((a, b) => {
        if (statusName === 'trash') return b.removedAt - a.removedAt
        if (statusName === 'sent') return b.sentAt - a.sentAt
        if (statusName === 'drafts') return b.createdAt - a.createdAt
        })
    }

    function saveNewMail(to, subject, body, status){
        const composedMail = mailService.getEmptySentMail(to, subject, body,status)
        console.log(composedMail)
        const userMsg = status === 'sent' ? 'Mail sent' : 'Mail saved to drafts'
        const userErrorMsg = status === 'sent' ? 'Cannot sent mail' : 'Cannot save to drafts'
        mailService.save(composedMail)
            .then(() => {
                        console.log(composedMail)
                        // setMails(prevMails => prevMails.map(mail => mail.id === mailId ? updatedMail : mail))
                        showSuccessMsg(userMsg)
                    })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg(userErrorMsg)})
    }

    const navData = mailService.getNavData(onStatusChange)
    const menuData = mailService.getMenuData(unreadCounter)
    const btnData = mailService.getBtnData(onComposeClick)

    return (
        <section className="mail-index">

            <MailHeader 
                onSetFilterBy={onSetFilterBy} 
                defaultFilter={filterBy}
            />

    {/* <div className="mail-top"> */}

        {/* <div className="mail-compose">
             <button onClick={onComposeClick}>
                    <span 
                    className="material-symbols-outlined" 
                      >edit
                </span>
                Compose
            </button>
        </div> */}

            {/* <div>header-actions</div> */}
           
           {/* </div> */}

              {searchParams.get('compose') === 'new' && (
                <MailNew 
                setSearchParams={setSearchParams}
                saveNewMail = {saveNewMail} />
            )} 

        <div className="mail-main">
                {/* <MailStatus
                onStatusChange = {onStatusChange}
                unreadMails = {unreadCounter} /> */}
                <SideNav
                navData = {navData}
                menuData = {menuData}
                btnData = {btnData} />

        <div className="mail-content">
            <div className="mail-categories-container">
                 {status === 'inbox' && 
                 < MailCategories
                    onCategoryChange = {onCategoryChange}
                />}
            </div>

              <MailList
                    mails = {categoryMails}

                   onRemoveMail = {onRemoveMail}
                   onMailActionToggle= {onMailActionToggle}
                   />
            </div>
        </div>

            {/* <div>bottom</div>  */}

        </section>
    )

}
