// mail service

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'
import { mailsHC } from './mailData.js'
import { colors } from "../../../assets/config/colors.js"

const MAIL_KEY = 'mails'
// const gCache = utilService.loadFromStorage(CACHE_STORAGE_KEY) || {}
// const CACHE_STORAGE_KEY = 'googleMailsCache'
if (!utilService.loadFromStorage(MAIL_KEY)) _createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptySentMail,
    getFilterFromParams,
    formatDate,
    capitalizeFirstLetter,
    unreadMailCounter,
    getNavData,
    getMenuData,
    getBtnData,
    getRandomGoogleColor
}

function query(filterBy = {}) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                mails = mails.filter(mail => 
                    regex.test(mail.subject) ||
                    regex.test(mail.body) ||
                    regex.test(mail.from) ||
                    regex.test(mail.fromEmail)
                )
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
        txt: 'puki', // no need to support complex text search
        // status:'inbox',  //'inbox/sent/trash/draft/starred/important'
        // isRead: true, // (optional property, if missing: show all)
        // isStared: true, // (optional property, if missing: show all)
        // categories: ['Primary', 'Promotions', 'Social', 'Updates'] // has any of the labels
    }

    // return { subject: '', isRead: '' }
}

function getFilterFromParams(searchParams) {
    const txt = searchParams.get('txt') || ''
    // const status = searchParams.get('status') || 'inbox'
    // const isRead = searchParams.get('isRead') || false
    // const isStared = searchParams.get('isStared') || false
    // const categories = searchParams.get('categories') || []

    return {
        txt,
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

function unreadMailCounter(mails){
    if (!mails || !mails.length) return 0
    // const inboxMails = []
    // let unreadCount = 0

    // mails.forEach(mail => {
    //     if (mail.status === 'inbox') inboxMails.push(mail)
    // })

    // inboxMails.forEach((mail) => {
    //     if (!mail.isRead) unreadCount ++
    // })

    return mails
        .filter(mail => mail.status === 'inbox' && !mail.isRead)
        .length
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

function getEmptySentMail(to, subject, body,status){
    return {
        id: undefined,
        createdAt : Date.now(), 
        subject: subject,
        body: body,
        isRead: true,
        sentAt : Date.now(),
        removedAt : null,
        from: loggedinUser.fullname,
        fromEmail: loggedinUser.email,
        to: to,
        status: status,
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


export const loggedinUser = {
 email: 'user@appsus.com',
 fullname: 'Mahatma Appsus'
}

function getNavData(onStatusChange){
    return [
        {   title: 'Inbox',
            func: (ev) => onStatusChange(ev, 'inbox'),
            iconName: 'image' //google icon name
        },
        {   title: 'Starred',
            func: (ev) => onStatusChange(ev, 'star'),
            iconName: 'star'
        },
        {   title: 'Important',
            func: (ev) => onStatusChange(ev, 'important'),
            iconName: 'label_important'
        },
        {   title: 'Sent',
            func: (ev) => onStatusChange(ev, 'sent'),
            iconName: 'send'
        },
        {   title: 'Drafts',
            func: (ev) => onStatusChange(ev, 'drafts'),
            iconName: 'draft'
        },
        {   title: 'Trash',
            func: (ev) => onStatusChange(ev, 'trash'),
            iconName: 'delete'
        }
    ]
} 

function getMenuData(unreadMails){
    return { 
            class: 'status',
            unreadMails: unreadMails,
        }
}

function getBtnData(onComposeClick){
    return {
            label: 'Compose',
            icon: 'edit',
            func: onComposeClick,
            className: 'compose-btn'
        }
}

function getRandomGoogleColor(min = 0, max = 9){
    const randNum = utilService.getRandomIntInclusive(min,max)
    return colors[randNum]
}


    
