const { useState, useRef, useEffect } = React;

import { MailFilter } from "../apps/mail/cmps/MailFilter.jsx"
import { NoteFilter } from "../apps/note/cmps/NoteFilter.jsx"

const { Link, NavLink } = ReactRouterDOM

export function AppHeader({ cmpFilterName = '', filterBy = '', onSetFilterBy = '' }) {

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
        <header className="app-header">
            <Link to="/">
                {cmpFilterName === 'note' ? (
                    <div>
                        <img src="" alt="Note logo" />
                        <h3>Keep</h3>
                    </div>
                ) : cmpFilterName === 'mail' ? (
                    <div>
                        <img src="./assets/img/gmail.svg" alt="Gmail logo" />
                        <h3>Gmail</h3>
                    </div>
                ) : (
                    <h3>AppSuss</h3>
                )}
            </Link>

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
            <div className="nav-wrapper" ref={navRef}>

            <i
                className="material-symbols-outlined"
                onClick={(ev) => {
                    ev.stopPropagation()
                    setIsOpen((prev) => !prev)
                }}
                > apps</i>
            {isOpen && (
                <nav className = "app-nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/mail">Mail</NavLink>
                    <NavLink to="/note">Note</NavLink>
                </nav>
            )}
            </div>
        </header>
    )
}