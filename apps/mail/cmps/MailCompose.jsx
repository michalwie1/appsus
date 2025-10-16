const { useEffect, useRef } = React


export function MailCompose({ setSearchParams}) {

    // useEffect(() => {
    //     setSearchParams(filterBy)
    //     loadMails()
    // }, [])


    function onCloseCompose() {
        setSearchParams({})
        // this should also save to draft!
    }

    return (
        <dialog open className="mail-compose">
            <form>
            <table>
                <tbody>
                    <tr className="header">
                        <td className="title">New Message</td>
                        <td className="actions">
                            {/* <img
                            src="../../../assets/img/minimize.svg"
                            title="Minimize"
                            onClick={() => console.log('minimize')}/> */}

                            <span 
                                className="material-symbols-outlined" 
                                title="Minimize"
                                onClick={() => console.log('minimize')}
                                >minimize
                            </span>
                            {/* <img
                            src="../../../assets/img/full_screen.svg"
                            title="Full screen"
                            onClick={() => console.log('full screen')}/> */}

                             <span 
                                className="material-symbols-outlined" 
                                title="Full screen"
                                onClick={() => console.log('full screen')}
                                >open_in_full
                            </span>

                            {/* <img
                            src="../../../assets/img/close.svg"
                            title="Save & close"
                            onClick={onCloseCompose}/> */}

                             <span 
                                className="material-symbols-outlined" 
                                title="Full screen"
                                onClick={onCloseCompose}
                                >close
                            </span>
                        </td>
                    </tr>
                
                    <tr className="to">
                        <td><input type="text" placeholder="Recipients"/></td>
                    </tr>
                    <tr className="subject">
                        <td><input type="text" placeholder="Subject"/></td>
                    </tr>

                    <tr className="body">
                        <td><textarea></textarea></td>
                        {/* <td><input></input></td> */}
                    </tr>

                     <tr className="send">
                        <td><button type="submit">Send</button></td>
                    </tr>

                </tbody>
            </table>
                    </form>


        </dialog>
    )
}
