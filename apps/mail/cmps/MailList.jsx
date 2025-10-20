const { Link } = ReactRouterDOM
import { MailPreview } from "./MailPreview.jsx"

export function MailList({ categoryMails, onRemoveMail, onMailActionToggle }) {

    return (
        <section className="mail-list">
            {categoryMails.map(mail => (
                <MailPreview
                    key = {mail.id}
                    mail = {mail}
                    onRemoveMail = {onRemoveMail}
                    onMailActionToggle = {onMailActionToggle}
                />
            ))}
        </section>
    )
}
