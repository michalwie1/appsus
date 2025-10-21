
export function SideNav({ navData, menuData }) {
let navClass = ''

    return (
        <section className="side-nav">
        {navData.map((nav, idx) => {{
                navClass = idx === 0 ? menuData.class + ' clicked' : menuData.class}
              return  (
                
              <div key={idx} className = {navClass}
                    onClick={nav.func}>
                <span className= "material-symbols-outlined"
                        title= {nav.title}>
                        {nav.iconName}
                </span>
                {nav.title === 'Inbox' 
                ? <p className="inbox">Inbox<span>{menuData.unreadMails}</span></p>
                : <p>{nav.title}</p>
                }    
                </div>
                )
        })}

        </section>
    )
}

// navData = [
//         {   title: 'Inbox',
//             func: (ev) => onStatusChange(ev, 'inbox'),
//             iconName: 'image' //google icon name
//         },
//         {   title: 'Starred',
//             func: (ev) => onStatusChange(ev, 'star'),
//             iconName: 'star'
//         },
//         {   title: 'Important',
//             func: (ev) => onStatusChange(ev, 'important'),
//             iconName: 'label_important'
//         },
//         {   title: 'Sent',
//             func: (ev) => onStatusChange(ev, 'sent'),
//             iconName: 'send'
//         },
//         {   title: 'Drafts',
//             func: (ev) => onStatusChange(ev, 'drafts'),
//             iconName: 'draft'
//         },
//         {   title: 'Trash',
//             func: (ev) => onStatusChange(ev, 'trash'),
//             iconName: 'delete'
//         }
//     ]

// menuData = { class: 'status',
//             unreadMails: unreadMails
// }