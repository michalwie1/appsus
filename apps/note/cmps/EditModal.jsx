import { ColorPicker } from "./ColorPicker.jsx";



const { useState, Fragment } = React


export function EditModal({ isOpen = false, onClose = () => { }, note, onSave
    , onChangeColor, onRemoveNote }) {
    const [txt, setTxt] = useState(note.info.txt);

    if (!isOpen) return null;


    const bgColor = note.style && note.style.backgroundColor ? note.style.backgroundColor : '#f7f7f7'

    function handleSave() {
        onSave({ ...note, info: { ...note.info, txt } }) // pass updated note
        onClose()// close modal
    }

    return (
        <Fragment>
            <section onClick={onClose} className="modal-backdrop" ></section>
            <section className="modal-content" onClick={e => e.stopPropagation()} style={{ backgroundColor: bgColor }}>
                <textarea
                    value={txt}
                    onChange={(e) => setTxt(e.target.value)}
                    rows={5}
                    style={{ backgroundColor: bgColor }}
                />

                <div className='action-bar'>
                    <button onClick={handleSave}>Save</button>
                    {/* <button className="close-btn" onClick={onClose}>X</button> */}
                    <i
                        className="material-symbols-outlined"
                        onClick={(ev) =>{
                            onRemoveNote(ev, note), onClose()}
                        } 
                    >Delete</i>
                    <ColorPicker note={note} onChangeColor={onChangeColor} />
                </div>
            </section>
        </Fragment>
    )
}
