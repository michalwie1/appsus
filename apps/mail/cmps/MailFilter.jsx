const { useState, useEffect, useRef } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { debounce } from "../../../services/util.service.js"

export function MailFilter({ defaultFilter, onSetFilterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState(defaultFilter)
    const onSetFilterByDebounce = useRef(debounce(onSetFilterBy, 500)).current
    const navigate = useNavigate()

    useEffect(() => {
        // onSetFilterBy(filterByToEdit)
        onSetFilterByDebounce(filterByToEdit)
    }, [filterByToEdit])


    function handleChange({ target }) {
        navigate('/mail')
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break
        }

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        console.log(filterByToEdit)
        onSetFilterBy(filterByToEdit)
    }
    const { txt, isRead } = filterByToEdit

    // const isValid = subject && isRead

    return (
        <section className="mail-filter">
            <form onSubmit={onSubmitFilter} className="search-bar">
                 <span 
                    className="material-symbols-outlined" 
                    >search
                </span>
                <label htmlFor="txt"></label>
                <input onChange={handleChange} value={txt} placeholder="Search mail" name="txt" id="txt" type="text" />

            </form>
        </section>
    )
}
