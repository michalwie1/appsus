import { NotePreview } from "./NotePreview.jsx"

export function NoteList({ notes,setNoteModal, onChangeColor={onChangeColor} }) {
    if (!notes || !notes.length) return <p>No notes to show</p>

    return (
        <section className="note-list flex column">
            {notes.map(note => (
                <article
                    key={note.id}
                >
                    <NotePreview note={note} setNoteModal={setNoteModal} onChangeColor={onChangeColor}/>
                </article>
            ))}
        </section>
    )
}