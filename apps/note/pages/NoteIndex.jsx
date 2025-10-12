import { NoteService } from "../services/note.service.js"

import { NoteList } from "../cmps/NoteList.jsx"



const { useState, useEffect, Fragment } = React
// const { Link, useSearchParams } = ReactRouterDOM


export function NoteIndex() {
    const [notes, setNotes] = useState(null)

    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        NoteService.query()
            .then(setNotes)
            .catch(err => console.log('Error loading books:', err))
    }
    if (!notes) return <div>Loading...</div>

    return (<section className="container">

        <NoteList notes={notes} />
    </section>
    )
}
