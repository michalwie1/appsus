const { useState, useRef, useEffect } = React;

import { MailFilter } from "../apps/mail/cmps/MailFilter.jsx"
import { NoteFilter } from "../apps/note/cmps/NoteFilter.jsx"

const { Link, NavLink } = ReactRouterDOM

export function AppHeader({ cmpFilterName = '', filterBy = '', onSetFilterBy = '', isMobile = '', onMenuClick = '', isMenuOpen='' }) {
    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(ev) {
            if (navRef.current && !navRef.current.contains(ev.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [])

    return (
        <header className={`app-header ${cmpFilterName} ${isMenuOpen ? 'menu-open' : ''}`}>
            
                {cmpFilterName === 'note' ? (
                    <div className = 'logo-container'>
                        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="Note logo" />
                        <h3 className = 'note-logo-title'>Keep</h3>
                    </div>
                ) : cmpFilterName === 'mail' && !isMobile ? (
                    <div className="logo-container">
                        <img className="mail" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="Gmail logo" />
                        {/* <img className="mail" src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt="Gmail logo" /> */}
                        {/* <h3 className='mail-logo-title'>Gmail</h3> */}
                    </div>
                ) : cmpFilterName === 'mail' && isMobile ? (
                 <div className="app-menu">
                    <span 
                        className="material-symbols-outlined"
                        onClick={() => onMenuClick()} 
                        >menu
                    </span>
                </div>
                ) : ('')
                }

            {filterBy && onSetFilterBy && (
                cmpFilterName === 'note' ? (
                    <NoteFilter
                        defaultFilter={filterBy}
                        onSetFilterBy={onSetFilterBy}
                    />
                ) : cmpFilterName === 'mail' ? (
                    <MailFilter
                        defaultFilter={filterBy}
                        onSetFilterBy={onSetFilterBy}
                    />
                ) : null
            )}
            {!isMenuOpen && <div className="nav-wrapper" ref={navRef}>

            <i
                className="material-symbols-outlined"
                onClick={(ev) => {
                    ev.stopPropagation()
                    setIsOpen((prev) => !prev)
                }}
                > apps</i>
            {isOpen && (
                <nav className = "app-nav">
                    {/* <NavLink to="/">Home</NavLink> */}
                    {/* <NavLink to="/about">About</NavLink> */}
                    <NavLink to="/mail"><img className="mail" src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt="Gmail logo" /> </NavLink>
                    <NavLink to="/note"> <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="Note logo" /></NavLink>
                </nav>
            )}
            </div>}
        </header>
    )
}