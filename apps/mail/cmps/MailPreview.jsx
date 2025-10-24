const { useNavigate } = ReactRouterDOM
const { useRef } = React

import { mailService } from "../services/mail.service.js"


export function MailPreview({ mail, onRemoveMail, onMailActionToggle, isMobile }) {
    const { from, subject, body, sentAt, to } = mail
    const date = mailService.formatDate(sentAt)
    const readState = mail.isRead ? 'read' : 'unread'
    const starState = mail.isStar ? 'unstar' : 'star'
    const checkState = mail.isCheck ? 'uncheck' : 'check'
    const importantState = mail.isImportant ? 'unimportant' : 'important'
    const navigate = useNavigate()
    const bgColorRef = useRef(mailService.getRandomGoogleColor())

    function onMailClick() {
      const updatedMail = { ...mail, isRead: true }
      mailService.save(updatedMail)
        .then(() => {
          navigate(`/mail/${mail.id}`)
        })
        .catch(err => console.log('err:', err))
  }

//   function onMailClick(mailId) {
//   navigate(`/mail/${mailId}`)
// }

    return (
        <section
            className={`mail-preview ${readState}`}
            // onClick={() => onMailClick()}
            >
                {isMobile &&<div className="img" style={{ backgroundColor: bgColorRef.current }}>
                {mail.from
                    ? mail.from.charAt(0).toUpperCase()
                    : '?'}
                </div>}
           
                {!isMobile && <span 
                    className="material-symbols-outlined" 
                    title={mailService.capitalizeFirstLetter(checkState)}
                    onClick={(event) => onMailActionToggle(event,mail.id, 'isCheck')}
                      >{mail.isCheck ? 'check_box' : 'check_box_outline_blank'}
                </span>}

                
                <span 
                    className={`material-symbols-outlined ${starState}`} 
                    title={mailService.capitalizeFirstLetter(starState)}
                    // style={{ color: mail.isStar ? 'yellow' : 'gray' }}
                    onClick={(event) => onMailActionToggle(event,mail.id, 'isStar')}
                      >star
                </span>

               {!isMobile && <span 
                    className={`material-symbols-outlined ${importantState}`} 
                    title={mailService.capitalizeFirstLetter(importantState)}
                    onClick={(event) => onMailActionToggle(event,mail.id, 'isImportant')}
                      >label_important
              </span>}

          {/* <div className="mail-info" */}

            <p className={mail.status === 'drafts' ? "from drafts" : "from"} onClick={onMailClick}>
              {isMobile && <span 
                    className="material-symbols-outlined"
                      >keyboard_double_arrow_right
                </span>}{mail.status === 'sent'
                        ? to
                        : mail.status === 'drafts'
                        ? 'Drafts'
                        : from}
              </p>

            <p className="subject" onClick={onMailClick}>{subject}</p>
            {isMobile && <p className="body" onClick={onMailClick}>{body}</p>}

          {/* </div> */}
            <div className="date-actions-wrapper" onClick={ev => ev.stopPropagation()}>
                <div className="date">{date}</div>

               {!isMobile && <div className="actions">
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

                </div>}
            </div>
        </section>
    )
}
