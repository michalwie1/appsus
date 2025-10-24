const { Link } = ReactRouterDOM

import { MailPreview } from "./MailPreview.jsx"
import { Loader } from "../../../cmps/Loader.jsx"


export function MailList({ mails, onRemoveMail, onMailActionToggle, isMobile }) {


    return (
        <section className="mail-list">
            {!mails.length && <Loader />}
            {mails.map(mail => (
                <MailPreview
                    key={mail.id}
                    mail={mail}
                    onRemoveMail={onRemoveMail}
                    onMailActionToggle={onMailActionToggle}
                    isMobile = {isMobile}
                    // onMailClick={onMailClick}
                />
                ))}
        </section>
    )
}
