const { useState, Fragment } = React

import { mailService } from "../services/mail.service.js"

export function MailNew({ setSearchParams}) {
    const [isMinimize,setIsMinimize] = useState(false)
    const [isFullScreen,setIsFullScreen] = useState(false)
    const [newMail,setNewMail] = useState({})

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

    function onMinimizeToggleModal(){
        setIsMinimize(!isMinimize)
    }

    function onFullScreenToggleModal(){
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
                break;

            case 'checkbox':
                value = target.checked
                break
        }

        // setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
        setNewMail(newMail => ({ ...newMail, [field]: value }))
    }

    function onCloseModal() {
        setSearchParams({})
        // this should also save to drafts!
        const { subject, body, to } = newMail

        const newMail = mailService.getEmptySentMail(to, subject, body)
        mailService.save(newMail)
            .then(() => {
                        console.log(newMail)
                        // setMails(prevMails => prevMails.map(mail => mail.id === mailId ? updatedMail : mail))
                        showSuccessMsg('Mail sent')
                    })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg(`Cannot send mail - ${mailId}`)})
    }

    return (
        <dialog open className="mail-new" style={dialogStyle}>
            <form>
            <table>
                <tbody>
                    <tr className="header">
                        <td className="title">New Message</td>
                        <td className="actions">

                            <span 
                                className="material-symbols-outlined" 
                                title={minimizeTitle}
                                onClick={onMinimizeToggleModal}
                                >minimize
                            </span>

                             <span 
                                className="material-symbols-outlined" 
                                title={isFullScreen ? "Exit full screen" : "Full screen"}
                                onClick={onFullScreenToggleModal}
                                >{fullScreen}
                            </span>

                             <span 
                                className="material-symbols-outlined" 
                                title="Full screen"
                                onClick={onCloseModal}
                                >close
                            </span>
                        </td>
                    </tr>

                {!isMinimize && 
                <Fragment>
                    <tr className="to">
                        <td><input onSubmit={handleChange} type="text" placeholder="Recipients" /></td>
                    </tr>
                    <tr className="subject">
                        <td><input onSubmit={handleChange} type="text" placeholder="Subject" /></td>
                    </tr>
                    <tr className="body">
                        <td><textarea onSubmit={handleChange}></textarea></td>
                    </tr>
                    <tr className="send">
                        <td><button type="submit">Send</button></td>
                    </tr>
                 </Fragment>
                }

                </tbody>
            </table>
                    </form>


        </dialog>
    )
}
