// mail service

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

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
    getDefaultFilter,
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
            if (filterBy.title) {
                console.log(filterBy.title)
                const regex = new RegExp(filterBy.title, 'i')
                mails = mails.filter(mail => regex.test(mail.title))
            }
            if (filterBy.listPrice) {
                mails = mails.filter(mail => mail.listPrice >= filterBy.listPrice)
            }
            return mails
        })
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
        .then(_setNextPrevMailId)
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
    return { title: '', listPrice: '' }
}

function getFilterFromParams(searchParams) {
    const title = searchParams.get('title') || ''
    const price = searchParams.get('price') || ''
    return {
        title,
        price
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
    let mails = utilService.loadFromStorage(MAIL_KEY) || []
    // let mails = []
    // console.log(mails)
    let count = 101
    if (mails && mails.length) return mails

    for (var i = 0; i < 26; i++) {
        const mail = _createMail()
        mail.id = `e${count+i}`
        mails.push(mail)
    }

    utilService.saveToStorage(MAIL_KEY, mails)
    console.log('mails', mails)
}

function _createMail(){
    let randsomTS = utilService.getRandomTimestamp()
    return {
        id: 'e101',
        createdAt : randsomTS - 20, 
        subject: utilService.makeLorem(2),
        body: utilService.makeLorem(5),
        isRead: Math.random() > 0.7,
        sentAt : randsomTS,
        removedAt : null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    }
}


// const mail = {
// id: 'e101',
// createdAt : 1551133930500,
// subject: 'Miss you!',
// body: 'Would love to catch up sometimes',
// isRead: false,
// sentAt : 1551133930594,
// removedAt : null,
// from: 'momo@momo.com',
// to: 'user@appsus.com'
// }

const loggedinUser = {
 email: 'user@appsus.com',
 fullname: 'Mahatma Appsus'
}

