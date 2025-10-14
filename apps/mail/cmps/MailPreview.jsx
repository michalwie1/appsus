import { LongTxt } from "./LongTxt.jsx"
import { mailService } from "../services/mail.service.js"

const { useState, useEffect, Fragment } = React

export function MailPreview({ mail, onRemoveMail, onToggleMailRead }) {
    const { from, subject, sentAt, isRead } = mail
    const date = formatDate()
    
    function formatDate(){
        return mailService.formatDate(sentAt)
    }

    const unreadActionClass = isRead ? '-open' : ''
    const unreadActionTitle = isRead ? 'unread' : 'read'

    
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
                     <i className={`fa-solid fa-envelope${unreadActionClass}`} title={`Make as ${unreadActionTitle}`} onClick={() => onToggleMailRead(mail.id)}></i>
                </div>
            </td>   
        </Fragment>

    )
}