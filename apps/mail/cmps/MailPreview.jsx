import { LongTxt } from "./LongTxt.jsx"
import { mailService } from "../services/mail.service.js"

const { useState, useEffect, Fragment } = React

export function MailPreview({ mail, onRemoveMail, onToggleMailRead }) {
    const [isMailRead, setIsMailRead] = useState(false)
    const { from, subject, sentAt, isRead } = mail
    const date = formatDate()


    useEffect(() => {
        // loadMail()
        // setIsMailRead(mail.isRead)
        // setIsMailRead(onToggleMailRead())
    }, [])
    
    function formatDate(){
        return mailService.formatDate(sentAt)
    }

    
    return (

        // <section className="mail-preview">
        <Fragment>
            <td>
                <input type="checkbox"></input>
            </td>

            <td>
                <i className="fa-regular fa-star"></i>
            </td>

            <td>    
                <p>{from}</p>
            </td>
           
            <td>    
                <p><LongTxt txt={subject}/></p>
            </td>

            <td className="date-actions-wrapper">
                <div className="date">
                    <p>{date}</p>
                </div>

                <div className="actions" onClick={(ev) => ev.stopPropagation()}>
                    <i className="fa-solid fa-trash" title="Delete" onClick={() => onRemoveMail(mail.id)}></i>

                    {/* SHOULD ADD - IF */}
                    {isMailRead 
                    ? <i className="fa-solid fa-envelope" title="Make as unread" onClick={() => onToggleMailRead(mail.id)}></i>
                    : <i className="fa-solid fa-envelope-open" title="Make as read" onClick={() => onToggleMailRead(mail.id)}></i>
                     }
                </div>
            </td>   
        </Fragment>

    )
}