const { Fragment } = React


export function EditModal({ isOpen = false, onClose = () => { }, note }) {
    console.log(note.info.txt)
    if (!isOpen) return null
    return (
        <Fragment>
            <section onClick={() => onClose()} className='modal-backdrop'></section>
            <section className='modal-content'>
                {note.info.txt}
                <button className='close-btn' onClick={onClose}>X</button>
            </section>
        </Fragment>
    )
}
