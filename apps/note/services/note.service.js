import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'
// localStorage.removeItem('noteDB')

_createNotes()

export const NoteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    createNewNote,
}

function query() {
    return storageService.query(NOTE_KEY)
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

function getEmptyNote(txt = '') {
    return {
        id: '',
        txt,
        createdAt: Date.now(),
    }
}

function createNewNote(txt) {
    return {
        id: '',    
        createdAt: Date.now(),
        type: 'NoteTxt',
        isPinned: false,
        style: { backgroundColor: utilService.getRandomColor() },
        info: { txt },
    }
}


function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY) || []
    console.log('notes:', notes)
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
                url: `https://robohash.org/1422`,
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
    console.log('creating new notes:', notes)
}