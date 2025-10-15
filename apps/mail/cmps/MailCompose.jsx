const { useEffect, useRef } = React


export function MailCompose({ setSearchParams}) {

    // useEffect(() => {
    //     setSearchParams(filterBy)
    //     loadMails()
    // }, [])


    function onCloseCompose() {
        setSearchParams({})
    }

    return (
        <dialog open className="mail-compose">
            <header className="compose-header">
                {/* <img src="../../../assets/img/gmail.svg" alt="Gmail logo" /> */}
                <h2>New Mail</h2>
                <button onClick={onCloseCompose}>X</button>
            </header>

            <form className="compose-form">
                <input type="text" placeholder="To" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Write your message..."></textarea>

                <div className="actions">
                    <button type="submit">Send</button>
                    <button type="button" onClick={onCloseCompose}>Discard</button>
                </div>
            </form>
        </dialog>
    )
}
