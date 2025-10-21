const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM


import { mailService } from "../services/mail.service.js"
import { MailIndex } from "./MailIndex.jsx"
import { Loader } from "../cmps/Loader.jsx"

export function MailDetails() {
const [mail, setMail] = useState(null)
const params = useParams()
const navigate = useNavigate()

useEffect(() => {
    loadMail()
    }, [params.mailId])

function loadMail(){
    mailService.get(params.mailId)
        .then(mail => {
            setMail(mail)
        })
        .catch(err => {
            console.log('err:', err)
            navigate('/mail')
        })
    }

function onBack() {
        navigate('/mail')
    }

// function onRemoveMail(){
//     MailIndex.
// }

if (!mail) return <Loader />

    return (
        <section className="mail-details">

            <div className="actions">
            <span className= "material-symbols-outlined"
                    title= "Back to Inbox"
                    onClick={onBack}
                        >arrow_back
            </span>

             <span className= "material-symbols-outlined"
                    title= "Delete"
                    // onClick={onRemoveMail}
                        >delete
            </span>

            <span 
                className="material-symbols-outlined" 
                // title={mailService.capitalizeFirstLetter(readState)}
                // onClick={(event) => onMailActionToggle(event,mail.id, 'isRead')}
                >{mail.isRead ? 'drafts' : 'mark_email_unread'}
            </span>

            </div>
            <h2>{mail.subject}</h2>
            <div>
                <p>{mail.from}</p>
                <p>{mail.fromEmail}</p>
                <p>{mail.body}</p>
            </div>
        </section>
    )

}