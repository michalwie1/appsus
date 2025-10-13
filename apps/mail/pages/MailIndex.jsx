

import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"
import { MailDetails } from "./MailDetails.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { Loader } from "../cmps/Loader.jsx"
import { showErrorMsg, showSuccessMsg } from "../../../services/event-bus.service.js"


const { useState, useEffect } = React
const { Link, useSearchParams } = ReactRouterDOM

export function MailIndex() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [mails, setMails] = useState([])
    const [openMailId, setOpenMailId] = useState(null)
    
    const [filterBy, setFilterBy] = useState(mailService.getFilterFromParams(searchParams))

    useEffect(() => {
        // console.log(filterBy)
        setSearchParams(filterBy)
        loadMails()
    }, [filterBy])
    
    // useEffect(() => {
    //     console.log(filterBy)
    //     setSearchParams(filterBy)
    //     loadMails()
    // }, [filterBy,openMailId])  
        
    function loadMails(){
        // mailService.query()
        console.log('rendering!')
        mailService.query(filterBy)
            .then(setMails)
            .catch(err => console.log('err:', err))
    }

    function onMailClicked(mailId){
        setOpenMailId(mailId)
    }

    // function onRemoveMail(mailId){
    //     mailService.remove(mailId)
    //         .then(() => {
    //             setMails(mails => mails.filter(mail => mail.id !== mailId))
    //             showSuccessMsg('Mail removed successfully!')
    //         })
    //         .catch(err => {
    //             console.log('err:', err)
    //             showErrorMsg(`Cannot remove mail - ${mailId}`)
    //         })
    // }

    function onSetFilterBy(newFilterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...newFilterBy }))
    }


    return (
        <section className="mail-index main-layout">

             <MailFilter onSetFilterBy={onSetFilterBy} defaultFilter={filterBy} />
             {/* <section className="container">
                <button className="edit-link"><Link to="/mail/edit">Add Mail</Link></button>
            </section> */}
            
            {openMailId 
            ? <MailDetails mailId={openMailId} onBack={() => setOpenMailId(null)}/>
            :  <MailList
                mails={mails}
                onMailClicked = {onMailClicked}
                />}

           

            {/* {!mails.length && <Loader />} */}
                   
               

        </section>
    )
}