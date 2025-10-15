import { NotePreview } from "./NotePreview.jsx"

export function NoteList({ notes,
    setNoteModal,
    onChangeColor,
    onRemoveNote,
    onPinNote }) {

    if (!notes || !notes.length) return <p>No notes to show</p>

    return (
        <section className="note-list">
            {notes.map(note => (
                <article
                    key={note.id}
                >
                    <NotePreview note={note}
                        setNoteModal={setNoteModal}
                        onChangeColor={onChangeColor}
                        onRemoveNote={onRemoveNote}
                        onPinNote={onPinNote} />
                </article>
            ))}
        </section>
    )
}