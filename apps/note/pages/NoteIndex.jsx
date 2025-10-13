import { NoteService } from "../services/note.service.js"
import { NoteList } from "../cmps/NoteList.jsx"
import { NoteAdd } from "../cmps/NoteAdd.jsx"

const { useState, useEffect } = React

export function NoteIndex() {
    const [notes, setNotes] = useState(null)

    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        NoteService.query()
            .then(setNotes)
            .catch(err => console.log('Error loading notes:', err))
    }

    function onAddNote(txt) {
      const newNote= NoteService.createNewNote(txt)
console.log(newNote)
        NoteService.save(newNote)
            .then(() => loadNotes())
            .catch(err => console.log('Error saving note:', err))
            .finally(console.log(notes))
    }

    if (!notes) return <div>Loading...</div>

    return (
        <section className="container">
            <NoteAdd onAddNote={onAddNote} />
            <NoteList notes={notes} />
        </section>
    )
}