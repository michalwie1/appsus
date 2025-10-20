import { mailService } from "../services/mail.service.js"

const { useNavigate } = ReactRouterDOM

export function MailPreview({ mail, onRemoveMail, onMailActionToggle }) {
    const { from, subject, sentAt } = mail
    const date = mailService.formatDate(sentAt)
    const readState = mail.isRead ? 'read' : 'unread'
    const starState = mail.isStar ? 'unstar' : 'star'
    const checkState = mail.isCheck ? 'uncheck' : 'check'
    const importantState = mail.isImportant ? 'unimportant' : 'important'
    const navigate = useNavigate()


    function onMailClick() {
      const updatedMail = { ...mail, isRead: true }
      mailService.save(updatedMail)
        .then(() => {
          navigate(`/mail/${mail.id}`)
        })
        .catch(err => console.log('err:', err))
  }

    return (
        <section
            className={`mail-preview ${readState}`}
            onClick={onMailClick}>

           
                <span 
                    className="material-symbols-outlined" 
                    title={mailService.capitalizeFirstLetter(checkState)}
                    onClick={(event) => onMailActionToggle(event,mail.id, 'isCheck')}
                      >{mail.isCheck ? 'check_box' : 'check_box_outline_blank'}
                </span>

                
             <span 
                    className={`material-symbols-outlined ${starState}`} 
                    title={mailService.capitalizeFirstLetter(starState)}
                    // style={{ color: mail.isStar ? 'yellow' : 'gray' }}
                    onClick={(event) => onMailActionToggle(event,mail.id, 'isStar')}
                      >star
                </span>

            <span 
                    className={`material-symbols-outlined ${importantState}`} 
                    title={mailService.capitalizeFirstLetter(importantState)}
                    onClick={(event) => onMailActionToggle(event,mail.id, 'isImportant')}
                      >label_important
            </span>

            <p className="from">{from}</p>
            <p className="subject">{subject}</p>

            <div className="date-actions-wrapper" onClick={ev => ev.stopPropagation()}>
                <div className="date">{date}</div>

                <div className="actions">
                     <span 
                        className= "material-symbols-outlined"
                        title= "Delete"
                        onClick={() => onRemoveMail(mail.id)}
                        >delete
                    </span>

                      <span 
                        className="material-symbols-outlined" 
                        title={mailService.capitalizeFirstLetter(readState)}
                        onClick={(event) => onMailActionToggle(event,mail.id, 'isRead')}
                        >{mail.isRead ? 'drafts' : 'mark_email_unread'}
                    </span>

                </div>
            </div>
        </section>
    )
}
