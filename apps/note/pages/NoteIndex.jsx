import { NoteService } from "../services/note.service.js"
import { NoteList } from "../cmps/NoteList.jsx"
import { NoteAdd } from "../cmps/NoteAdd.jsx"
import { EditModal } from "../cmps/EditModal.jsx"
import { NoteFilter } from "../cmps/NoteFilter.jsx"

const { useState, useEffect } = React

export function NoteIndex() {
    const [notes, setNotes] = useState(null)
    const [filterBy, setFilterBy] = useState(NoteService.getDefaultFilter())
    const [isOpen, setIsOpen] = useState(true)
    const [noteModal, setNoteModal] = useState(null)

    useEffect(() => {
        loadNotes()
    }, [])

    useEffect(() => {
        setIsOpen(true)
    }, [noteModal])

    useEffect(() => {
        loadNotes()
    }, [filterBy])

    function loadNotes() {
        NoteService.query(filterBy)
            .then(setNotes)
            .catch(err => console.log('Error loading notes:', err))
    }

    function onAddNote(noteData) {
        const newNote = NoteService.createNewNote(noteData.title, noteData.txt);
        NoteService.save(newNote)
            .then(() => loadNotes())
            .catch(err => console.log('Error saving note:', err));
    }
    function handleSaveNote(updatedNote) {
        NoteService.save(updatedNote).then(() => loadNotes());
    }

    function onRemoveNote(ev, note) {
        ev.stopPropagation()
        NoteService.remove(note.id)
            .then(() => loadNotes())
            .catch(err => console.log('Error saving note:', err))
        // .finally(console.log(notes))

    }

    function onSetFilterBy(newFilter) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...newFilter }))
    }

    function onChangeColor(color, note) {
        const updatedNote = {
            ...note,
            style: {
                ...note.style,
                backgroundColor: color
            }
        }

        NoteService.save(updatedNote)
            .then(() => {
                loadNotes()
                if (noteModal && noteModal.id === updatedNote.id) {
                    setNoteModal(updatedNote);
                }
            })
            .catch(err => console.log("Error changing color:", err));
    }

    function onPinNote(ev,note){
        ev.stopPropagation()
        console.log('pinned note' + note.id)
           const updatedNote = {
        ...note,
        isPinned: !note.isPinned
    }
    
        NoteService.save(updatedNote)
           .then(() => loadNotes())
            .catch(err => console.log('Error saving note:', err))
}


    function onCloseModal() {
        setIsOpen(false)
        setNoteModal(false)
    }

    if (!notes) return <div>Loading...</div>

    return (
        <section className="main-container">
            <NoteFilter
                defaultFilter={filterBy}
                onSetFilterBy={onSetFilterBy} />
            <section className="container">
                <NoteAdd onAddNote={onAddNote} />
                <NoteList
                    notes={notes}
                    setNoteModal={setNoteModal}
                    onChangeColor={onChangeColor}
                    onRemoveNote={onRemoveNote}
                    onPinNote={onPinNote} />
                {/* <button onClick = {onToggleModal}>toggle modal</button> */}
                {noteModal &&
                    <EditModal
                        isOpen={isOpen}
                        onClose={onCloseModal}
                        note={noteModal}
                        onSave={handleSaveNote}
                        onChangeColor={onChangeColor}
                        onRemoveNote={onRemoveNote}
                    />
                }
            </section>
        </section>
    )
}