const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { Loader } from "./Loader.jsx"
import { mailService } from "../services/mail.service.js"

export function MailDetails({ mailId, onBack }) {
const [mail, setMail] = useState(null)


useEffect(() => {
    loadMail()
    console.log(mail)
    }, [mailId])

function loadMail(){
    mailService.get(mailId)
        .then(mail => {
            setMail(mail)
        })
        .catch(err => {
            console.log('err:', err)
            // navigate('/mail')
        })
}

if (!mail) return <Loader />

    return (
        <section className="mail-details">
            <i className="fa-solid fa-arrow-left" onClick={onBack}></i>
            <h2>{mail.subject}</h2>
            <div>
                <p>{mail.from}</p>
                <p>{mail.body}</p>
            </div>
        </section>
    )

}