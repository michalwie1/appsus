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
    getDefaultFilter,
    duplicateNote,
    createNewTodoNote,
}

function query(filterBy = {}) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                notes = notes.filter(note =>
                    regex.test((note.info && note.info.txt) || '') ||
                    regex.test((note.info && note.info.title) || '')
                )
            }

            if (filterBy.type) {
                notes = notes.filter(note =>
                    note.type === filterBy.type
                )
            }

            if (filterBy.title) {
                const regex = new RegExp(filterBy.title, 'i')
                notes = notes.filter(note =>
                    regex.test((note.info && note.info.title) || '')
                )
            }

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
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

function getDefaultFilter() {
    return { txt: '', type: '', title: '' }
}

function getEmptyNote(txt = '') {
    return {
        id: '',
        txt,
        createdAt: Date.now(),
    }
}

function createNewNote(title = '', txt = '') {
    return {
        id: '',    
        createdAt: Date.now(),
        type: 'NoteTxt',
        isPinned: false,
        style: { backgroundColor: '' },
        info: { title ,txt },
    }
}

function createNewTodoNote(title = '', todos = []) {
  return {
    id: '',
    createdAt: Date.now(),
    type: 'NoteTodos',
    isPinned: false,
    style: { backgroundColor: '' },
    info: {
      title: title,
      todos: todos.map(txt => ({
        txt,
        doneAt: false, 
      })),
    },
  };
}

function duplicateNote(note) {
    return {
        ...note,
        id: '',      
        createdAt: Date.now(),       
        isPinned: false,              
        info: { ...note.info },        
        style: { ...note.style }      
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
            style: { backgroundColor: ''},
            info: { title: '' , txt: 'Fullstack Me Baby!' }
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
            style: { backgroundColor: '' }
        },
        {
            id: 'n103',
            createdAt: 1112224,
            type: 'NoteTodos',
            isPinned: false,
            info: {
                title: 'Get my stuff together',
                todos: [
                    { txt: 'Driving license', doneAt: false },
                    { txt: 'Coding power', doneAt: true }
                ]
            }
        }
    ]

    utilService.saveToStorage(NOTE_KEY, notes)
    console.log('creating new notes:', notes)
}