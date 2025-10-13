import { NoteService } from "../services/note.service.js"
import { NoteList } from "../cmps/NoteList.jsx"
import { NoteAdd } from "../cmps/NoteAdd.jsx"
import { EditModal } from "../cmps/EditModal.jsx"

const { useState, useEffect } = React

export function NoteIndex() {
    const [notes, setNotes] = useState(null)
    const [isOpen, setIsOpen] = useState(true)
    const [noteModal, setNoteModal] = useState(null)

    useEffect(() => {
        loadNotes()
    }, [])

    useEffect(() => {
        setIsOpen(true)
    }, [noteModal])

    function loadNotes() {
        NoteService.query()
            .then(setNotes)
            .catch(err => console.log('Error loading notes:', err))
    }

    function onAddNote(txt) {
        const newNote = NoteService.createNewNote(txt)
        console.log(newNote)
        NoteService.save(newNote)
            .then(() => loadNotes())
            .catch(err => console.log('Error saving note:', err))
            .finally(console.log(notes))
    }

    function handleSaveNote(updatedNote) {
        NoteService.save(updatedNote).then(() => loadNotes());
    }

    function onClose() {
        setIsOpen(false)
        setNoteModal(false)
    }

    if (!notes) return <div>Loading...</div>

    return (
        <section className="container">
            <NoteAdd onAddNote={onAddNote} />
            <NoteList notes={notes} setNoteModal={setNoteModal} />
            {/* <button onClick = {onToggleModal}>toggle modal</button> */}
            {noteModal &&
                <EditModal
                    isOpen={isOpen}
                    onClose={onClose}
                    note={noteModal}
                    onSave={handleSaveNote}
                />
            }

        </section>
    )
}