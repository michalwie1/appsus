import { NotePreview } from "./NotePreview.jsx"

export function NoteList({ notes }) {
    if (!notes || !notes.length) return <p>No notes to show</p>

    return (
        <section className="note-list">
            {notes.map(note => (
                <article
                    key={note.id}
                    className="note-item"
                >
                    <NotePreview note={note} />
                </article>
            ))}
        </section>
    )
}