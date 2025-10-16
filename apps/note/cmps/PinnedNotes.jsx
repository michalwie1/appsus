import { ColorPicker } from "./ColorPicker.jsx";

export function PinnedNotes({ note, setNoteModal, onChangeColor, onRemoveNote ,onPinNote }) {
    if (!note) return null;

    // Avoid optional chaining for older Babel
    const bgColor = (note.style && note.style.backgroundColor) ? note.style.backgroundColor : '#f7f7f7';

    return (
        <article
            onClick={() => setNoteModal(note)}
            className="note-item"
            style={{ backgroundColor: bgColor }}
        >

                    <span className="material-symbols-outlined pin pinned" onClick={(ev)=> onPinNote(ev,note)}>
                        keep
                    </span>  
            {/* Text Note */}
            {note.type === 'NoteTxt' && note.info && (
                <div>
                     {note.info.title && <h5>{note.info.title}</h5>}
                    {note.info.txt && <p>{note.info.txt}</p>}
                </div>
            )}

            {/* Image Note */}
            {note.type === 'NoteImg' && note.info && (
                <div>
                    {note.info.title && <h5>{note.info.title}</h5>}
                    {note.info.url && (
                        <img
                            src={note.info.url}
                            alt={note.info.title || 'Image Note'}
                            style={{ maxWidth: '150px', borderRadius: '8px' }}
                        />
                    )}
                </div>
            )}

            {/* Todos Note */}
            {note.type === 'NoteTodos' && note.info && note.info.todos && (
                <div>
                    {note.info.todos.map((todo, idx) => (
                        <div key={idx}>
                            {todo.txt} {todo.doneAt ? '✔' : '❌'}
                        </div>
                    ))}
                </div>
            )}
            <div className="action-bar">
                <i
                    className="material-symbols-outlined"
                    onClick={(ev) => onRemoveNote(ev, note)}
                >Delete</i>
                <ColorPicker note={note} onChangeColor={onChangeColor} />
            </div>
        </article>
    );
}