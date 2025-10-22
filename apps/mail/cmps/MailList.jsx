const { Link } = ReactRouterDOM

import { MailPreview } from "./MailPreview.jsx"
import { Loader } from "../../../cmps/Loader.jsx"

export function MailList({ mails, onRemoveMail, onMailActionToggle }) {

    return (
        <section className="mail-list">
            {!mails.length && <Loader />}
            {mails.map(mail => (
                <Link
                    key={mail.id}
                    to={`/mail/${mail.id}`}
                    className="mail-link"
                >
                <MailPreview
                    key = {mail.id}
                    mail = {mail}
                    onRemoveMail = {onRemoveMail}
                    onMailActionToggle = {onMailActionToggle}
                />
                </Link>
            ))}
        </section>
    )
}
