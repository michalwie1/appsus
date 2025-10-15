const { Link } = ReactRouterDOM
import { MailPreview } from "./MailPreview.jsx"

export function MailList({ mails, onMailClicked, onRemoveMail, onToggleMailRead }) {
    return (
        <section className="mail-list">
            {mails.map(mail => (
                <MailPreview
                    key={mail.id}
                    mail={mail}
                    onRemoveMail={onRemoveMail}
                    onToggleMailRead={onToggleMailRead}
                    onMailClicked={onMailClicked}
                />
            ))}
        </section>
    )
}
