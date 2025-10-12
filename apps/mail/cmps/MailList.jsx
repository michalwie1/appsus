const { Link } = ReactRouterDOM

import { MailPreview } from "./MailPreview.jsx"

export function MailList({ mails }) {
// export function MailList({ mails, onRemoveMail }) {
console.log('MailList')
    return (
        <ul className="mail-list container">
            {mails.map(mail =>
                <li key={mail.id}>
                    <MailPreview mail={mail} />
                    <section>
                        {/* <button onClick={ev => onRemoveMail(mail.id)}>Delete</button> */}

                        {/* <button onClick={() => onSelectmailId(mail.id)} >Details</button> */}
        
                        {/* <button><Link to={`/mail/${mail.id}`}>Details</Link></button> */}
                        {/* <button><Link to={`/mail/edit/${mail.id}`}>Edit</Link></button> */}

                    </section>
                </li>
            )}
        </ul>
    )


}