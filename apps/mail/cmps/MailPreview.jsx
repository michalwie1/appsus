import { LongTxt } from "./LongTxt.jsx"
import { mailService } from "../services/mail.service.js"
import deleteIcon from "../../../assets/img/delete.svg"


const { useState, useEffect, Fragment } = React

export function MailPreview({ mail, onRemoveMail, onToggleMailRead }) {
    const { from, subject, sentAt, isRead } = mail
    const date = formatDate()
    
    function formatDate(){
        return mailService.formatDate(sentAt)
    }

    // const unreadActionClass = isRead ? '-open' : ''
    const unreadAction = isRead ? 'unread' : 'read'

    
    return (

        // <section className="mail-preview">
        <Fragment>
            <td>
                {/* <input type="checkbox" onClick={(ev) => ev.stopPropagation()}></input> */}
                <img src="../../../assets/img/checkbox_blank.svg" title="Select" onClick={(ev) => ev.stopPropagation()}></img>

            </td>

            <td>
                {/* <i className="fa-regular fa-star"></i> */}
                <img src="../../../assets/img/star.svg" title="Not starred" onClick={(ev) => ev.stopPropagation()}></img>
            </td>
            <td>
                <img src="../../../assets/img/important.svg" title="Click to teach Gmail this coversation is important" onClick={(ev) => ev.stopPropagation()}></img>
            </td>

            <td>    
                <p>{from}</p>
            </td>
           
            <td class="subject">    
                {/* <LongTxt txt={subject}/> */}
                {subject}
            </td>

            <td className="date-actions-wrapper">
                <div className="date">
                    {date}
                </div>

                <div className="actions" onClick={(ev) => ev.stopPropagation()}>
                    {/* <i className="fa-solid fa-trash" title="Delete" onClick={() => onRemoveMail(mail.id)}></i> */}
                    <img src="../../../assets/img/delete.svg" title="Delete" onClick={() => onRemoveMail(mail.id)}></img>
                    {/* <i className={`fa-solid fa-envelope${unreadActionClass}`} title={`Mark as ${unreadAction}`} onClick={() => onToggleMailRead(mail.id)}></i> */}
                    <img src={`../../../assets/img/${unreadAction}.svg`} title={`Mark as ${unreadAction}`} onClick={() => onToggleMailRead(mail.id)}></img>
                </div>
            </td>   
        </Fragment>

    )
}