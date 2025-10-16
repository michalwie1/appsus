const { Link } = ReactRouterDOM
import { MailPreview } from "./MailPreview.jsx"

export function MailList({ mails, onRemoveMail, onMailActionToggle }) {

    return (
        <section className="mail-list">
            {mails.map(mail => (
                <MailPreview
                    key = {mail.id}
                    mail = {mail}
                    onRemoveMail = {onRemoveMail}
                    // onToggleMailRead = {onToggleMailRead}
                    onMailActionToggle = {onMailActionToggle}
                />
            ))}
        </section>
    )
}
