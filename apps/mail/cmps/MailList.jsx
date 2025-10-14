const { Link } = ReactRouterDOM

import { MailPreview } from "./MailPreview.jsx"

export function MailList({ mails, onMailClicked, onRemoveMail, onToggleMailRead }) {

    return (
        <table className="mail-list container">
            <tbody>
            {mails.map(mail =>
                <tr className={mail.isRead ? 'read' : ''} key={mail.id} onClick={()=> onMailClicked(mail.id)}>
                    <MailPreview 
                        mail = {mail}
                        onRemoveMail = {onRemoveMail}
                        onToggleMailRead = {onToggleMailRead} 
                    />
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