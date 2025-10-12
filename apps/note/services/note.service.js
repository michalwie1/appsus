import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'

_createNotes()

export const NoteService = {
    query,
    get,
    remove,
    save,
    getNextNoteId,
    getDefaultFilter,
}

function query(filterBy = {}) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            // if (filterBy.txt) {
            //     const regex = new RegExp(filterBy.txt, 'i')
            //     notes = notes.filter(note =>
            //         regex.test(note.info?.title || note.info?.txt || '')
            //     )
            // }
            console.log('Notes loaded:', notes)
            return notes
        })
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) return storageService.put(NOTE_KEY, note)
    else return storageService.post(NOTE_KEY, note)
}


function getDefaultFilter() {
    return { txt: '' }
}

function getNextNoteId(noteId) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            let nextIdx = notes.findIndex(note => note.id === noteId) + 1
            if (nextIdx === notes.length) nextIdx = 0
            return notes[nextIdx].id
        })
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY) || []
    if (notes.length) return

    notes = [
        {
            id: 'n101',
            createdAt: 1112222,
            type: 'NoteTxt',
            isPinned: true,
            style: { backgroundColor: '#00d' },
            info: { txt: 'Fullstack Me Baby!' }
        },
        {
            id: 'n102',
            createdAt: 1112223,
            type: 'NoteImg',
            isPinned: false,
            info: {
                url: 'https://placekitten.com/200/200',
                title: 'Bobi and Me'
            },
            style: { backgroundColor: '#00d' }
        },
        {
            id: 'n103',
            createdAt: 1112224,
            type: 'NoteTodos',
            isPinned: false,
            info: {
                title: 'Get my stuff together',
                todos: [
                    { txt: 'Driving license', doneAt: null },
                    { txt: 'Coding power', doneAt: 187111111 }
                ]
            }
        }
    ]

    utilService.saveToStorage(NOTE_KEY, notes)
    console.log('Notes seeded:', notes)
}