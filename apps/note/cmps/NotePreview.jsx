import { ColorPicker } from "./ColorPicker.jsx";


export function NotePreview({ note,setNoteModal }) {
    if (!note) return null

    const bgColor = note.style && note.style.backgroundColor ? note.style.backgroundColor : '#f7f7f7'


    return  (
        <article
            onClick={() => setNoteModal(note)}  // <-- Pass the note here
            className="note-item"
            style={{ backgroundColor: bgColor }}
        >
            {/* <h4>{note.type}</h4> */}

            {note.type === 'NoteTxt' && <p>{note.info.txt}</p>}

            {note.type === 'NoteImg' && (
                <div>
                    <h5>{note.info.title}</h5>
                    <img
                        src={note.info.url}
                        alt={note.info.title}
                        style={{ maxWidth: '150px', borderRadius: '8px' }}
                    />
                </div>
            )}
            {note.type === 'NoteTodos' && note.info.todos && (
                <div>
                    {note.info.todos.map((todo, idx) => (
                        <div key={idx}>
                            {todo.txt} {todo.doneAt ? '✅' : '❌'}
                        </div>
                    ))}
                </div>
            )}
            <div className="action-bar">

             <ColorPicker note={note}/>
            </div>
        </article>
    )
}