const { useState, Fragment } = React


export function MailNew({ setSearchParams}) {
    const [isMinimize,setIsMinimize] = useState(false)
    const [isFullScreen,setIsFullScreen] = useState(false)

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

    function onMinimizeToggleModal(){
        setIsMinimize(!isMinimize)
    }

    function onFullScreenToggleModal(){
        if (isMinimize) return
        setIsFullScreen(!isFullScreen)
    }

    function onCloseModal() {
        setSearchParams({})
        // this should also save to drafts!
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
                        <td><input type="text" placeholder="Recipients" /></td>
                    </tr>
                    <tr className="subject">
                        <td><input type="text" placeholder="Subject" /></td>
                    </tr>
                    <tr className="body">
                        <td><textarea></textarea></td>
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
