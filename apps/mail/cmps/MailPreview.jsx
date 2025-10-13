import { LongTxt } from "./LongTxt.jsx"
import { mailService } from "../services/mail.service.js"

const { useState, useEffect, Fragment } = React

export function MailPreview({ mail }) {
  
    const { from, subject, sentAt, isRead } = mail
    const date = formatDate()

    useEffect(() => {
        // loadMail()
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
            
            <td>    
                <p>{date}</p>
            </td>
        </Fragment>

    )
}