const { useState, useEffect, Fragment } = React

import { mailService } from "../services/mail.service.js"
// import { showErrorMsg, showSuccessMsg } from "../../../services/event-bus.service.js"

export function MailNew({ setSearchParams, onSaveNewMail, isMobile }) {
    const [isMinimize, setIsMinimize] = useState(false)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [newMail, setNewMail] = useState({})

    const minimizeTitle = isMinimize ? 'Maximize' : 'Minimize'
    const fullScreen = isFullScreen ? 'close_fullscreen' : 'open_in_full'
    const dialogStyle = {
        ...(isFullScreen && { 
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '65vw'
        }),
        ...(isMinimize && { 
            height: 'max-content'
        })
    }

    useEffect(() => {
        setNewMail({})
    }, [])

    function onMinimizeToggleModal() {
        setIsMinimize(!isMinimize)
    }

    function onFullScreenToggleModal() {
        if (isMinimize) return
        setIsFullScreen(!isFullScreen)
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break
            case 'checkbox':
                value = target.checked
                break
        }

        setNewMail(prev => ({ ...prev, [field]: value }))
    }

    function onCloseModal(ev,action) {
        ev.preventDefault()
        setSearchParams({})

        const status = action === 'save' ? 'sent' : 'drafts'
        // if (action === 'close') {
            const { to, subject, body } = newMail
            if (to || subject || body) 
            onSaveNewMail(to, subject, body, status)

        // }
        // else {
            // const { to, subject, body } = newMail
            // onSaveNewMail(to, subject, body)
        // }
    }

    const { to, subject } = newMail
    const isValid = to && subject

    return (
        <dialog open className="mail-new" style={dialogStyle}>
            <form onSubmit={(ev) => onCloseModal(ev,'save')}>
                <div className="header">
                    {!isMobile && <div className="title">New Message</div>}
                    <div className="actions">
                        {
                            !isMobile ? (
                            <div className="desktop">
                                <span
                                    className="material-symbols-outlined"
                                    title={minimizeTitle}
                                    onClick={onMinimizeToggleModal}
                                >minimize</span>
        
                                <span
                                    className="material-symbols-outlined"
                                    title={isFullScreen ? "Exit full screen" : "Full screen"}
                                    onClick={onFullScreenToggleModal}
                                >{fullScreen}</span>
        
                                <span
                                    className="material-symbols-outlined"
                                    title="Close"
                                    onClick={(ev) => onCloseModal(ev,'close')}
                                >close</span>
                            </div>
                            ) :
                            <div className="mobile">
                                 <span
                                    className="material-symbols-outlined"
                                    title="Close"
                                    onClick={(ev) => onCloseModal(ev,'close')}
                                >arrow_back
                                </span>

                                {/* <div className="send"> */}
                                <button disabled={!isValid} type="submit" className="send">
                                    <span
                                        className="material-symbols-outlined"
                                        onClick={onFullScreenToggleModal}
                                    >send</span>
                                </button>
                                {/* </div> */}
                            </div>
                        }
                    </div>
                </div>

                {!isMinimize && (
                    <Fragment>
                        <div className="to">
                            <input
                                onChange={handleChange}
                                type="email"
                                name="to"
                                placeholder="Recipients"
                            />
                        </div>

                        <div className="subject">
                            <input
                                onChange={handleChange}
                                type="text"
                                name="subject"
                                placeholder="Subject"
                            />
                        </div>

                        <div className="body">
                            <textarea onChange={handleChange} name="body"></textarea>
                        </div>

                       {!isMobile && 
                       <div className="send">
                            <button disabled={!isValid} type="submit">Send</button>
                        </div>}
                    </Fragment>
                )}
            </form>
        </dialog>
    )
}
