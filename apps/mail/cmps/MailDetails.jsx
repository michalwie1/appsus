const { useState, useEffect, useRef } = React
const { useParams, useNavigate, Link } = ReactRouterDOM


import { mailService } from "../services/mail.service.js"
import { MailIndex } from "../pages/MailIndex.jsx"
import { Loader } from "../../../cmps/Loader.jsx"
import { loggedinUser } from "../services/mail.service.js"

export function MailDetails({ onRemoveMail, onMailActionToggle }) {
const [mail, setMail] = useState(null)
const params = useParams()
const navigate = useNavigate()
const bgColorRef = useRef(mailService.getRandomGoogleColor())

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



  function handleAction(ev, mailId, action) {
    onMailActionToggle(ev, mailId, action)
    setMail(prev => ({ ...prev, [action]: !prev[action] }))
  }

  function handleRemove() {
    onRemoveMail(mail.id)
    navigate('/mail')
  }

if (!mail) return <Loader />

const userMail = loggedinUser.email
const userName = loggedinUser.fullname
const starState = mail.isStar ? 'unstar' : 'star'
const importantState = mail.isImportant ? 'unimportant' : 'important'


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
                        onClick={handleRemove}
                            >delete
                </span>

                <span 
                    className="material-symbols-outlined" 
                    // title={mailService.capitalizeFirstLetter(readState)}
                    onClick={(event) => handleAction(event,mail.id, 'isRead')}
                    >{mail.isRead ? 'drafts' : 'mark_email_unread'}
                </span>

                <span className= {`material-symbols-outlined ${starState}`} 
                        title= {mail.isStar ? 'Unstar' : 'star'}
                       onClick={(event) => handleAction(event,mail.id, 'isStar')}
                            >{mail.isStar ? 'star' : 'star_outline'}
                </span>

                 <span 
                    className={`material-symbols-outlined ${importantState}`} 
                    title={mailService.capitalizeFirstLetter(importantState)}
                    onClick={(event) => handleAction(event, mail.id, 'isImportant')}
                      >label_important
                </span>

            </div>

            <h2>{mail.subject}</h2>

            <div className="header">
                
                <div className="img" style={{ backgroundColor: bgColorRef.current }}>
                {mail.from
                    ? mail.from.charAt(0).toUpperCase()
                    : '?'}
                </div>

                <div className="info">
                <p className="from">{mail.from} <span>{`<${mail.fromEmail}>`}</span></p>
                <p className="to">{userName} <span>{`<${userMail}>`}</span></p>
                </div>

                {/* <p className="date">{mailService.formatDate(mail.sentAt)}</p> */}
                
            </div>

            <div className="body">
                <p>{mail.body}</p>
            </div>
                
        </section>
    )

}