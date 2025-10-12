const { Link } = ReactRouterDOM

import { MailPreview } from "./MailPreview.jsx"

export function MailList({ mails }) {
// export function MailList({ mails, onRemoveMail }) {
console.log('MailList')
    return (
        <table className="mail-list container">
            <tbody>
            {mails.map(mail =>
                <tr key={mail.id}>
                    <MailPreview mail={mail} />
                    <section>
                        {/* <button onClick={ev => onRemoveMail(mail.id)}>Delete</button> */}

                        {/* <button onClick={() => onSelectmailId(mail.id)} >Details</button> */}
        
                        {/* <button><Link to={`/mail/${mail.id}`}>Details</Link></button> */}
                        {/* <button><Link to={`/mail/edit/${mail.id}`}>Edit</Link></button> */}

                    </section>
                </tr>
            )}
            </tbody>
        </table>
    )


}