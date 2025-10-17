import { mailService } from "../services/mail.service.js"

const { useNavigate } = ReactRouterDOM

export function MailPreview({ mail, onRemoveMail, onMailActionToggle }) {
    const { from, subject, sentAt, isRead, isStar, isCheck, isImportant } = mail
    const date = mailService.formatDate(sentAt)
    const readState = isRead ? 'read' : 'unread'
    const starState = isStar ? 'star' : 'unstar'
    const checkState = isCheck ? 'check' : 'uncheck'
    const importantState = isImportant ? 'important' : 'unimportant'
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
                    title={checkState}
                    onClick={(event) => onMailActionToggle(event,mail.id, 'isCheck')}
                      >{isCheck ? 'check_box' : 'check_box_outline_blank'}
                </span>

                
             <span 
                    className={`material-symbols-outlined ${starState}`} 
                    title={starState}
                    // style={{ color: isStar ? 'yellow' : 'gray' }}
                    onClick={(event) => onMailActionToggle(event,mail.id, 'isStar')}
                      >star
                </span>

            <span 
                    className={`material-symbols-outlined ${importantState}`} 
                    title={importantState}
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
                    
                    {/* <img
                        src={`../../../assets/img/${readState}.svg`}
                        title={`Mark as ${readState}`}
                        onClick={(event) => onMailActionToggle(event,mail.id, 'isRead')}/>
                     */}

                      <span 
                        className="material-symbols-outlined" 
                        title={readState}
                        onClick={(event) => onMailActionToggle(event,mail.id, 'isRead')}
                        >{isRead ? 'drafts' : 'mark_email_unread'}
                    </span>

                </div>
            </div>
        </section>
    )
}
