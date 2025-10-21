export function MailStatus({ onStatusChange, unreadMails }) {

    return (
        <section className="mail-status">

            <div className = "status clicked"
                onClick={(ev) => onStatusChange(ev, 'inbox')}>
             <span className= "material-symbols-outlined"
                    title= "Person-to-person conversations and messages that don't appear in other tabs."
                        >image
                    </span>
            {/* <p className="inbox">{`Inbox ${unreadMails}`}</p> */}
            <p className="inbox">Inbox<span>{unreadMails}</span></p>
            </div>

            <div className= "status"
                onClick={(ev) => onStatusChange(ev, 'star')}>
                 <span className= "material-symbols-outlined"
                    title= "Marketing, interests, social and political causes, and other promotional emails will be shown here."
                        >star
                    </span>
            <p>Starred</p>
            </div>

            <div className="status"
                onClick={(ev) => onStatusChange(ev, 'important')}>
                 <span className= "material-symbols-outlined"
                    title= "Messages from social networks, media-sharing sites, online dating services, and other social websites."
                        >label_important
                    </span>
            <p>Important</p>

            </div>

            <div className="status"
                onClick={(ev) => onStatusChange(ev, 'sent')}>
                 <span className= "material-symbols-outlined"
                    title= "Personal, auto-generated updates including confirmations, receipts, bills, and statements."
                        >send
                    </span>
            <p>Sent</p>
            </div>

            <div className="status"
                onClick={(ev) => onStatusChange(ev, 'drafts')}>
                 <span className= "material-symbols-outlined"
                    title= "Personal, auto-generated updates including confirmations, receipts, bills, and statements."
                        >draft
                    </span>
            <p>Drafts</p>
            </div>

            <div className="status"
                onClick={(ev) => onStatusChange(ev, 'trash')}>
                 <span className= "material-symbols-outlined"
                    title= "Personal, auto-generated updates including confirmations, receipts, bills, and statements."
                        >delete
                    </span>
            <p>Trash</p>
            </div>


        </section>
    )
}
