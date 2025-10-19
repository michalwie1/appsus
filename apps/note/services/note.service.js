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
    createNewImgNote,
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
function createNewImgNote(title = '', imgUrl) {
  return {
    id: '',
    createdAt: Date.now(),
    type: 'NoteImg',
    isPinned: false,
    style: { backgroundColor: '' },
    info: {
        url: imgUrl,
      title: title,
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
        createdAt: 1728900000001,
        type: 'NoteTxt',
        isPinned: true,
        style: { backgroundColor: '#fff9c4' },
        info: { title: 'Motivation', txt: 'Fullstack Me Baby!' }
    },
    {
        id: 'n102',
        createdAt: 1728900000002,
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'https://robohash.org/1422',
            title: 'Bobi and Me'
        },
        style: { backgroundColor: '#f8bbd0' }
    },
    {
        id: 'n103',
        createdAt: 1728900000003,
        type: 'NoteTodos',
        isPinned: false,
        style: { backgroundColor: '#c8e6c9' },
        info: {
            title: 'Get my stuff together',
            todos: [
                { txt: 'Driving license', doneAt: false },
                { txt: 'Coding power', doneAt: true }
            ]
        }
    },
    {
        id: 'n104',
        createdAt: 1728900000004,
        type: 'NoteTxt',
        isPinned: false,
        style: { backgroundColor: '#bbdefb' },
        info: { title: 'Ideas', txt: 'Build a note app in React' }
    },
    {
        id: 'n105',
        createdAt: 1728900000005,
        type: 'NoteImg',
        isPinned: false,
        style: { backgroundColor: '#ffe0b2' },
        info: { url: 'https://picsum.photos/200/200?1', title: 'Sunset vibes' }
    },
    {
        id: 'n106',
        createdAt: 1728900000006,
        type: 'NoteTodos',
        isPinned: false,
        style: { backgroundColor: '#d1c4e9' },
        info: {
            title: 'Groceries',
            todos: [
                { txt: 'Milk', doneAt: true },
                { txt: 'Eggs', doneAt: true },
                { txt: 'Bread', doneAt: false }
            ]
        }
    },
    {
        id: 'n107',
        createdAt: 1728900000007,
        type: 'NoteTxt',
        isPinned: false,
        style: { backgroundColor: '#f0f4c3' },
        info: { title: 'Quote', txt: 'Do or do not. There is no try.' }
    },
    {
        id: 'n108',
        createdAt: 1728900000008,
        type: 'NoteImg',
        isPinned: true,
        style: { backgroundColor: '#e1bee7' },
        info: { url: 'https://picsum.photos/200/200?2', title: 'My workspace' }
    },
    {
        id: 'n109',
        createdAt: 1728900000009,
        type: 'NoteTodos',
        isPinned: true,
        style: { backgroundColor: '#b2dfdb' },
        info: {
            title: 'Weekend tasks',
            todos: [
                { txt: 'Laundry', doneAt: false },
                { txt: 'Workout', doneAt: true },
                { txt: 'Movie night', doneAt: false }
            ]
        }
    },
    {
        id: 'n110',
        createdAt: 1728900000010,
        type: 'NoteTxt',
        isPinned: false,
        style: { backgroundColor: '#ffcdd2' },
        info: { title: 'Reminder', txt: 'Call mom at 8 PM' }
    },
    {
        id: 'n111',
        createdAt: 1728900000011,
        type: 'NoteImg',
        isPinned: false,
        style: { backgroundColor: '#dcedc8' },
        info: { url: 'https://picsum.photos/200/200?3', title: 'Beach day' }
    },
    {
        id: 'n112',
        createdAt: 1728900000012,
        type: 'NoteTodos',
        isPinned: false,
        style: { backgroundColor: '#c5cae9' },
        info: {
            title: 'Study plan',
            todos: [
                { txt: 'Read React docs', doneAt: true },
                { txt: 'Build mini app', doneAt: false }
            ]
        }
    },
    {
        id: 'n113',
        createdAt: 1728900000013,
        type: 'NoteTxt',
        isPinned: false,
        style: { backgroundColor: '#ffe082' },
        info: { title: 'Workout', txt: 'Chest and triceps today 💪' }
    },
    {
        id: 'n114',
        createdAt: 1728900000014,
        type: 'NoteImg',
        isPinned: true,
        style: { backgroundColor: '#f3e5f5' },
        info: { url: 'https://picsum.photos/200/200?4', title: 'Coding fuel ☕' }
    },
    {
        id: 'n115',
        createdAt: 1728900000015,
        type: 'NoteTodos',
        isPinned: false,
        style: { backgroundColor: '#b3e5fc' },
        info: {
            title: 'Vacation prep',
            todos: [
                { txt: 'Book flight', doneAt: true },
                { txt: 'Pack bag', doneAt: false }
            ]
        }
    },
    {
        id: 'n116',
        createdAt: 1728900000016,
        type: 'NoteTxt',
        isPinned: false,
        style: { backgroundColor: '#fce4ec' },
        info: { title: 'Dream', txt: 'Open a tech startup one day' }
    },
    {
        id: 'n117',
        createdAt: 1728900000017,
        type: 'NoteImg',
        isPinned: false,
        style: { backgroundColor: '#c8e6c9' },
        info: { url: 'https://picsum.photos/200/200?5', title: 'City lights' }
    },
    {
        id: 'n118',
        createdAt: 1728900000018,
        type: 'NoteTodos',
        isPinned: false,
        style: { backgroundColor: '#fff59d' },
        info: {
            title: 'Morning routine',
            todos: [
                { txt: 'Drink water', doneAt: true },
                { txt: 'Meditate', doneAt: false },
                { txt: 'Check emails', doneAt: false }
            ]
        }
    },
    {
        id: 'n119',
        createdAt: 1728900000019,
        type: 'NoteTxt',
        isPinned: false,
        style: { backgroundColor: '#f8bbd0' },
        info: { title: 'Random thought', txt: 'Pineapples don’t grow on trees.' }
    },
    {
        id: 'n120',
        createdAt: 1728900000020,
        type: 'NoteImg',
        isPinned: false,
        style: { backgroundColor: '#d1c4e9' },
        info: { url: 'https://picsum.photos/200/200?6', title: 'Desk setup' }
    },
    {
        id: 'n121',
        createdAt: 1728900000021,
        type: 'NoteTodos',
        isPinned: false,
        style: { backgroundColor: '#e6ee9c' },
        info: {
            title: 'Work goals',
            todos: [
                { txt: 'Finish sprint', doneAt: true },
                { txt: 'Push to GitHub', doneAt: false }
            ]
        }
    },
    ]

    utilService.saveToStorage(NOTE_KEY, notes)
    console.log('creating new notes:', notes)
}