// mail service

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'
import { mailsHC } from './mailData.js'

const MAIL_KEY = 'mails'
// const gCache = utilService.loadFromStorage(CACHE_STORAGE_KEY) || {}
// const CACHE_STORAGE_KEY = 'googleMailsCache'
_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    // getEmptyMail,
    // getNextCarId,
    // getFilterBy,
    // setFilterBy,
    // getDefaultFilter,
    // addReview,
    // removeReview,
    // addGoogleMail,
    // getGoogleMails,
    getFilterFromParams,
    formatDate
}

function query(filterBy = {}) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            if (filterBy.subject) {
                const regex = new RegExp(filterBy.subject, 'i')
                mails = mails.filter(mail => regex.test(mail.subject))
            }
            // if (filterBy.listPrice) {
            //     mails = mails.filter(mail => mail.listPrice >= filterBy.listPrice)
            // }
            return mails
        })
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
        // .then(_setNextPrevMailId)
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

function getDefaultFilter() {
    // return { subject: '' }

    return {
        status:'inbox',  //'inbox/sent/trash/draft/starred/important'
        txt: 'puki', // no need to support complex text search
        isRead: true, // (optional property, if missing: show all)
        isStared: true, // (optional property, if missing: show all)
        categories: ['Primary', 'Promotions', 'Social', 'Updates'] // has any of the labels
    }

    // return { subject: '', isRead: '' }
}

function getFilterFromParams(searchParams) {
    const status = searchParams.get('status') || 'inbox'
    const txt = searchParams.get('txt') || ''
    const isRead = searchParams.get('isRead') || false
    const isStared = searchParams.get('isStared') || false
    const categories = searchParams.get('categories') || []

    return {
        status,
        txt,
        isRead,
        isStared,
        categories
    }
}

function formatDate(timestamp){
    const date = new Date(timestamp)
    const month = utilService.getMonthName(date)
    const formattedMonthName = month.slice(0,3)
    const formattedDay = date.getDate()
    const formattedMonth = date.getMonth() + 1
    const formattedYear = String(date.getFullYear()).slice(-2)
    
    const formattedDate = (timestamp < Date.now()) 
        ? `${formattedMonthName} ${formattedDay}` 
        : `${formattedDay}/${formattedMonth}/${formattedYear}`
    
    return formattedDate
}

function _createMails(){
    let mails = utilService.loadFromStorage(MAIL_KEY)

    // 2. If no data in storage, use hardcoded data
    if (!mails || !mails.length) {
        mails = [...mailsHC] // clone to avoid mutating the original array
        utilService.saveToStorage(MAIL_KEY, mails)
        console.log('mails:', mails)
    }

    return mails
}

// function _createMail(){
//     let randsomTS = utilService.getRandomTimestamp()
//     return {
//         id: 'e101',
//         createdAt : randsomTS - 20, 
//         subject: utilService.makeLorem(5),
//         body: utilService.makeLorem(5),
//         isRead: Math.random() > 0.7,
//         sentAt : randsomTS,
//         removedAt : null,
//         from: 'momo@momo.com',
//         to: 'user@appsus.com'
//     }
// }


const loggedinUser = {
 email: 'user@appsus.com',
 fullname: 'Mahatma Appsus'
}

