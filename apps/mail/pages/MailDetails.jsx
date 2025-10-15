const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM


import { Loader } from "../cmps/Loader.jsx"
import { mailService } from "../services/mail.service.js"

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

if (!mail) return <Loader />

    return (
        <section className="mail-details">
            <i className="fa-solid fa-arrow-left" onClick={onBack}></i>
            <h2>{mail.subject}</h2>
            <div>
                <p>{mail.from}</p>
                <p>{mail.fromEmail}</p>
                <p>{mail.body}</p>
            </div>
        </section>
    )

}