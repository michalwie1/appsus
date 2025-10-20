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
    getEmptySentMail,
    // getNextCarId,
    // getFilterBy,
    // setFilterBy,
    // getDefaultFilter,
    // addReview,
    // removeReview,
    // addGoogleMail,
    // getGoogleMails,
    getFilterFromParams,
    formatDate,
    capitalizeFirstLetter,
    unreadMailCounter,
    // getMailsCategoryCount,
    // getCategory
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
    const subject = searchParams.get('subject') || ''
    // const status = searchParams.get('status') || 'inbox'
    // const isRead = searchParams.get('isRead') || false
    // const isStared = searchParams.get('isStared') || false
    // const categories = searchParams.get('categories') || []

    return {
        subject,
        // status,
        // isRead,
        // isStared,
        // categories
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

function capitalizeFirstLetter(txt){
   return utilService.getCapitalizeFirstLetter(txt)
}

function unreadMailCounter(){
    let mails = utilService.loadFromStorage(MAIL_KEY)
    let unreadCount = 0

    mails.map((mail) => {
        if (mail.isRead) unreadCount ++
    })

    return unreadCount
}

// function getMailsCategoryCount(){ 
//     let mails = utilService.loadFromStorage(MAIL_KEY)
//     // const categoriesCount = {primary:0,promotions:0, social:0,updates:0}
//     const categories = {primary: [], promotions: [], social: [], updates: []}

//     mails.map((mail) => {
//         mail.categories.map((category) => {
//             const formatCategory = category.toLowerCase()
//             categories[formatCategory].push(mail.id)
//             // categoriesCount[formatCategory] ++
//         })
//     })
//     return categories
// }

// function getCategory(categoryName){
//     let mails = utilService.loadFromStorage(MAIL_KEY)
//     const categories = getMailsCategoryCount()
//     const categoryMails = []

//     categories[categoryName].map((mailId) => {

//         let mailIdx = mails.findIndex(mail => mail.id === mailId)
//         let mail = mails[mailIdx]
//         categoryMails.push(mail)
//     })
//     return categoryMails
// }

function getEmptySentMail(to, subject, body){
    return {
        id: 'e101',
        createdAt : Date.now(), 
        subject: '',
        body: '',
        isRead: true,
        sentAt : Date.now(),
        removedAt : null,
        from: loggedinUser.fullname,
        fromEmail: loggedinUser.email,
        to: to,
        status: "inbox",
        isStar: false,
        isImportant: false,
        isCheck: false,
        "categories": []
    }
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

