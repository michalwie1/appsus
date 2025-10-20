import { NoteService } from "../services/note.service.js"
import { NoteList } from "../cmps/NoteList.jsx"
import { NoteAdd } from "../cmps/NoteAdd.jsx"
import { EditModal } from "../cmps/EditModal.jsx"
import { NoteFilter } from "../cmps/NoteFilter.jsx"
import { NoteLoader } from "../cmps/NoteLoader.jsx"

const { useState, useEffect } = React

export function NoteIndex() {
    const [notes, setNotes] = useState(null)
    const [filterBy, setFilterBy] = useState(NoteService.getDefaultFilter())
    const [isOpen, setIsOpen] = useState(true)
    const [noteModal, setNoteModal] = useState(null)
    const [isCheckList, setisCheckList] = useState(false)
    const [isImg, setisImg] = useState(false)

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
// console.log("noteData" + JSON.stringify(noteData) )

        if (noteData.txt){
            const newNote = NoteService.createNewNote(noteData.title, noteData.txt);
            NoteService.save(newNote)
            .then(loadNotes)
            .catch(err => console.log('Error saving note:', err));
        }else if (noteData.imgUrl){
            const newNote = NoteService.createNewImgNote(noteData.title, noteData.imgUrl);
            NoteService.save(newNote)
            .then(loadNotes)
            .catch(err => console.log('Error saving note:', err));
        }else{
            console.log("noteData.title" + noteData.title)
             const newNote = NoteService.createNewTodoNote(noteData.title, noteData.todos);
            NoteService.save(newNote)
            .then(loadNotes)
            .catch(err => console.log('Error saving note:', err));
        }
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

    function onPinNote(ev, note) {
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

    function onDuplicateNote(ev, note) {
        ev.stopPropagation()
        console.log('duplicated note' + note.id)
        const newNote = NoteService.duplicateNote(note);
        NoteService.save(newNote)
            .then(() => loadNotes())
            .catch(err => console.log('Error duplicating note:', err));
    }

    function onCloseModal() {
        setIsOpen(false)
        setNoteModal(false)
    }

    function onChangetoCheckList(ev) {
        setisCheckList(true)
        setisImg(false)
        loadNotes()
    }
    function onChangetoText(ev) {
        setisCheckList(false)
        setisImg(false)
        loadNotes()
    }
    function onChangeToImg(ev) {
        setisCheckList(false)
        setisImg(true)
        loadNotes()
    }

    if (!notes) return <NoteLoader/>

    return (
        <section className="main-container">
            <NoteFilter
                defaultFilter={filterBy}
                onSetFilterBy={onSetFilterBy} />
            <section className="container">
                <NoteAdd
                    onAddNote={onAddNote}
                    onChangetoCheckList={onChangetoCheckList}
                    onChangetoText = {onChangetoText}
                    onChangeToImg = {onChangeToImg}
                    isImg={isImg} 
                    isCheckList={isCheckList} 
                    />
                <NoteList
                    notes={notes}
                    setNoteModal={setNoteModal}
                    onChangeColor={onChangeColor}
                    onRemoveNote={onRemoveNote}
                    onPinNote={onPinNote}
                    onDuplicateNote={onDuplicateNote} />
                {/* <button onClick = {onToggleModal}>toggle modal</button> */}
                {noteModal &&
                    <EditModal
                        isOpen={isOpen}
                        onClose={onCloseModal}
                        note={noteModal}
                        onSave={handleSaveNote}
                        onChangeColor={onChangeColor}
                        onRemoveNote={onRemoveNote}
                        onDuplicateNote={onDuplicateNote}
                    />
                }
            </section>
        </section>
    )
}