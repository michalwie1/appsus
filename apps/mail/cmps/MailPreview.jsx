import { mailService } from "../services/mail.service.js"

export function MailPreview({ mail, onMailClicked, onRemoveMail, onToggleMailRead }) {
    const { from, subject, sentAt, isRead } = mail
    const date = mailService.formatDate(sentAt)
    const readState = isRead ? 'read' : 'unread'

    return (
        <section
            className={`mail-preview ${readState}`}
            onClick={() => onMailClicked(mail.id)}>
        
            <img
                src="../../../assets/img/checkbox_blank.svg"
                title="Select"
                onClick={ev => ev.stopPropagation()}/>
            

            <img
                src="../../../assets/img/star.svg"
                title="Star"
                onClick={ev => ev.stopPropagation()}/>
            

            <img
                src="../../../assets/img/important.svg"
                title="Mark important"
                onClick={ev => ev.stopPropagation()}/>
            

            <p className="from">{from}</p>
            <p className="subject">{subject}</p>

            <div className="date-actions-wrapper" onClick={ev => ev.stopPropagation()}>
                <div className="date">{date}</div>
                <div className="actions">
                    <img
                        src="../../../assets/img/delete.svg"
                        title="Delete"
                        onClick={() => onRemoveMail(mail.id)}/>
                    
                    <img
                        src={`../../../assets/img/${readState}.svg`}
                        title={`Mark as ${readState}`}
                        onClick={() => onToggleMailRead(mail.id)}/>
                    
                </div>
            </div>
        </section>
    )
}
