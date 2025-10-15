import { MailFilter } from "./MailFilter.jsx"

export function MailHeader({ onSetFilterBy, defaultFilter}) {

    return (
        <section className="mail-header">
            <img src="/../../../assets/img/gmail.svg"></img>
            <img src="./../../assets/img/gmail.svg"></img>
            <img src="../../../assets/img/gmail.svg"></img>
            <h2>MisterMail</h2>
            <MailFilter onSetFilterBy={onSetFilterBy} defaultFilter={defaultFilter} />

        </section>
    )
}
