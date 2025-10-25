const { useState, useEffect } = React
const { Link, useSearchParams, useParams, useNavigate } = ReactRouterDOM


import { mailService } from "../services/mail.service.js"
import { MailList } from "../cmps/MailList.jsx"
import { MailHeader } from "../cmps/MailHeader.jsx"
import { MailNew } from "../cmps/MailNew.jsx"
import { showErrorMsg, showSuccessMsg } from "../../../services/event-bus.service.js"
import { MailCategories } from "../cmps/MailCategories.jsx"
import { SideNav } from "../../../cmps/SideNav.jsx"
import { MailDetails } from "../cmps/MailDetails.jsx"
import { AppHeader } from "../../../cmps/AppHeader.jsx"

export function MailIndex() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [mails, setMails] = useState([])
    const [unreadCounter, setUnreadCounter] = useState(0)
    const [category, setCategory] = useState('primary')
    const [status, setStatus] = useState('inbox')
    // const [openMailId, setOpenMailId] = useState(null)
    const [filterBy, setFilterBy] = useState(mailService.getFilterFromParams(searchParams))
    // const [readToggle, setReadToggle] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const { mailId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setSearchParams(filterBy)
        loadMails()
    }, [filterBy])

     useEffect(() => {
        setUnreadCounter(mailService.unreadMailCounter(mails))
    }, [mails])

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    function handleResize() {
        const width = window.innerWidth
        setScreenWidth(width)
        setIsMobile(width <= 800)
        //   console.log(width, width <= 800)
    }

    function loadMails(){
        mailService.query(filterBy)
            .then(setMails)
            .catch(err => console.log('err:', err))
    }


    function onRemoveMail(mailId) {
    mailService.get(mailId)
        .then(mail => {
        if (mail.status === 'trash') {
            return mailService.remove(mailId)
            .then(() => {
                showSuccessMsg('Mail deleted permanently!', 'mail')
                loadMails()
            })
        } else {
            const updatedMail = { ...mail, status: 'trash', removedAt: Date.now() }

            return mailService.save(updatedMail)
            .then(() => {
                showSuccessMsg('Mail moved to trash!', 'mail')
                return new Promise(resolve => setTimeout(resolve, 150))
            })
            .then(() => loadMails())
        }
        })
        .catch(err => {
        console.error('err:', err)
        showErrorMsg(`Cannot remove mail - ${mailId}`, 'mail')
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
            // .then(() => loadMails())
            .catch(err => console.log('err:', err))
            // .finally(() => loadMails())

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
        navigate('/mail')
    }

    // const categoryMails = mails.filter(mail =>
    //     mail.categories.map(category => category.toLowerCase()).includes(category))
        
    const categoryMails = getMailsByFolder(status)
    
    function getMailsByFolder(statusName){
        if (!mails || !mails.length) return []
        
        if (statusName === 'inbox') {
            return mails.filter(mail =>
            mail.status === 'inbox' &&
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
        return b.createdAt - a.createdAt
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
                        showSuccessMsg(userMsg, 'mail')
                        loadMails()
                    })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg(userErrorMsg)})
    }

    function onMenuClick(){
        isMenuOpen = !isMenuOpen
        console.log(isMenuOpen)
    }

    const navData = mailService.getNavData(onStatusChange)
    const menuData = mailService.getMenuData(unreadCounter)
    const btnData = mailService.getBtnData(onComposeClick)
    let isMenuOpen = !isMobile

    return (
        <section className="mail-index">
             <AppHeader
                cmpFilterName={'mail'}
                filterBy={filterBy}
                onSetFilterBy={onSetFilterBy}
                isMobile={isMobile}
                onMenuClick={onMenuClick} />


           {/* <MailHeader 
                onSetFilterBy={onSetFilterBy} 
                defaultFilter={filterBy}
            /> */}

            {isMobile &&
        <div className="compose-btn">
             <button onClick={onComposeClick}>
                    <span 
                    className="material-symbols-outlined" 
                      >edit
                </span>
                Compose
            </button>
        </div>}

              {searchParams.get('compose') === 'new' && (
                <MailNew 
                setSearchParams={setSearchParams}
                saveNewMail = {saveNewMail} />
            )} 

        <div className="mail-main">

               {isMenuOpen &&  <SideNav
                navData = {navData}
                menuData = {menuData}
                btnData = {btnData} />}

        <div className="mail-content">
            <div className="mail-categories-container">
                 {status === 'inbox' && !mailId && !isMobile &&
                 <MailCategories
                    onCategoryChange = {onCategoryChange}
                />}
            </div>

               {(!isMobile || !mailId) && <MailList
                    mails = {categoryMails}
                   onRemoveMail = {onRemoveMail}
                   onMailActionToggle= {onMailActionToggle}
                   isMobile = {isMobile}
                   />}

                {/* {isMobile && <MailList
                    mails = {categoryMails}
                   onRemoveMail = {onRemoveMail}
                   onMailActionToggle= {onMailActionToggle}
                   />} */}

                {mailId && 
                <MailDetails 
                    // mailId={mailId}
                    onRemoveMail = {onRemoveMail}
                    onMailActionToggle = {onMailActionToggle}
                    />}

            </div>
        </div>

        </section>
    )

}
