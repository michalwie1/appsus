const { Link } = ReactRouterDOM
const { useState, useEffect } = React

// import { MailDetails } from "./MailPreview.jsx"
import { mailService } from "../services/mail.service.js"

export function MailDetails({ mailId, onBack }) {
const [mail, setMail] = useState(null)

console.log(mailId)

useEffect(() => {
        loadMail()
    }, [])

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

    return (
        <section className="mail-details">
            <h2>blaaaaa</h2>
            <i className="fa-solid fa-arrow-left" onClick={onBack}></i>
        </section>
    )


}