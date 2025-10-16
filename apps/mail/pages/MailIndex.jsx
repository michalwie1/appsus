

import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"
// import { MailDetails } from "./MailDetails.jsx"
import { MailHeader } from "../cmps/MailHeader.jsx"
import { MailCompose } from "../cmps/MailCompose.jsx"
import { Loader } from "../cmps/Loader.jsx"
import { showErrorMsg, showSuccessMsg } from "../../../services/event-bus.service.js"


const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM

export function MailIndex() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [mails, setMails] = useState([])
    // const [openMailId, setOpenMailId] = useState(null)
    
    const [filterBy, setFilterBy] = useState(mailService.getFilterFromParams(searchParams))

    useEffect(() => {
        setSearchParams(filterBy)
        loadMails()
    }, [filterBy])
     
        
    function loadMails(){
        mailService.query(filterBy)
            .then(setMails)
            .catch(err => console.log('err:', err))
    }

    function onRemoveMail(mailId) {
        mailService.remove(mailId)
            .then((removedMail) => {
                // removedMail.removedAt(Date.now())
                setMails(prevMails => prevMails.filter(mail => mail.id !== mailId))
                showSuccessMsg('Mail deleted successfully!')
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg(`Cannot remove mail - ${mailId}`)
            })
    }

    function onToggleMailRead(mailId) {
        setMails(prevMails =>
            prevMails.map(mail =>
                mail.id === mailId ? { ...mail, isRead: !mail.isRead } : mail
            )
        )
       
        mailService.get(mailId)
            .then(mail => {
                mail.isRead = !mail.isRead
                return mailService.save(mail)
            })
            .catch(err => console.log('err:', err))
    }   

    function onSetFilterBy(newFilterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...newFilterBy }))
    }

    function onComposeClick() {
        setSearchParams({ compose: 'new' })
    }

    return (
        <section className="mail-index main-layout">

            <MailHeader 
                onSetFilterBy={onSetFilterBy} 
                defaultFilter={filterBy}
            />


            <button onClick={onComposeClick}>
                    <img src="../../../assets/img/edit.svg" />
                    Compose
            </button>

            {searchParams.get('compose') === 'new' && (
                <MailCompose setSearchParams={setSearchParams} />
            )}

            {/* <button onClick={<MailCompose 
                            setSearchParams={setSearchParams}
                            />}>
                <img src="../../../assets/img/edit.svg"/>
                    Compose
            </button> */}
            {/* <button><Link to="/book/edit">Add Book</Link></button> */}

            

            {!mails.length && <Loader />}
            
            
             <MailList
                mails = {mails}
                onRemoveMail = {onRemoveMail}
                onToggleMailRead = {onToggleMailRead}
                />

        </section>
    )
}