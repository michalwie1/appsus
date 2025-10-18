import { ColorPicker } from "./ColorPicker.jsx";
import { NoteTxt } from "./NoteTxt.jsx";
import { NoteTodo } from "./NoteTodo.jsx";
import { NoteImg } from "./NoteImg.jsx";

export function NotePreview({ note, setNoteModal, onChangeColor, onRemoveNote, onPinNote, onDuplicateNote }) {
    if (!note) return null;

    // Avoid optional chaining for older Babel
    const bgColor = (note.style && note.style.backgroundColor) ? note.style.backgroundColor : '#f7f7f7';

    return (
        <article
            onClick={() => setNoteModal(note)}
            className="note-item"
            style={{ backgroundColor: bgColor }}
        >

            <span className="material-symbols-outlined pin" onClick={(ev) => onPinNote(ev, note)}>
                keep
            </span>
            {note.type === 'NoteTxt' && note.info && (
                <NoteTxt note={note} />
            )}

            {note.type === 'NoteImg' && note.info && (
                <NoteImg  note={note} />
            )}
            {note.type === 'NoteTodos' && note.info && note.info.todos && (
                <NoteTodo note={note} />
            )}
            <div className="action-bar">
                <i
                    className="material-symbols-outlined"
                    onClick={(ev) => onRemoveNote(ev, note)}
                >Delete</i>
                <i className="material-symbols-outlined"
                    onClick={(ev) => onDuplicateNote(ev, note)}>
                    content_copy
                </i>
                <ColorPicker note={note} onChangeColor={onChangeColor} />
            </div>
        </article>
    );
}