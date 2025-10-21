export function MailStatus({ onStatusChange, unreadMails }) {

    return (
        <section className="mail-status">

            <div className = "status clicked"
                onClick={(ev) => onStatusChange(ev, 'inbox')}>
             <span className= "material-symbols-outlined"
                    title= ""
                        >image
                    </span>
            {/* <p className="inbox">{`Inbox ${unreadMails}`}</p> */}
            <p className="inbox">Inbox<span>{unreadMails}</span></p>
            </div>

            <div className= "status"
                onClick={(ev) => onStatusChange(ev, 'star')}>
                 <span className= "material-symbols-outlined"
                    title= ""
                        >star
                    </span>
            <p>Starred</p>
            </div>

            <div className="status"
                onClick={(ev) => onStatusChange(ev, 'important')}>
                 <span className= "material-symbols-outlined"
                    title= ""
                        >label_important
                    </span>
            <p>Important</p>

            </div>

            <div className="status"
                onClick={(ev) => onStatusChange(ev, 'sent')}>
                 <span className= "material-symbols-outlined"
                    title= ""
                        >send
                    </span>
            <p>Sent</p>
            </div>

            <div className="status"
                onClick={(ev) => onStatusChange(ev, 'drafts')}>
                 <span className= "material-symbols-outlined"
                    title= ""
                        >draft
                    </span>
            <p>Drafts</p>
            </div>

            <div className="status"
                onClick={(ev) => onStatusChange(ev, 'trash')}>
                 <span className= "material-symbols-outlined"
                    title= ""
                        >delete
                    </span>
            <p>Trash</p>
            </div>


        </section>
    )
}
