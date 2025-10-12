import { LongTxt } from "./LongTxt.jsx"
import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React

export function MailPreview({ mail }) {
  
    const { from, subject, sentAt } = mail
    const date = formatDate()

    useEffect(() => {
        // loadMail()
        // const date = formatDate()
    }, [])
    
    function formatDate(){
        return mailService.formatDate(sentAt)
    }

    return (

        <article className="mail-preview">
                <input type="checkbox"></input>
                <i class="fa-solid fa-star"></i>
                <p>{from}</p>
                <p><LongTxt txt={subject}/></p>
                <p>{date}</p>
        </article>
    )
}