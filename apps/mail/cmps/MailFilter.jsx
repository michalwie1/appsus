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
    const { subject, isRead } = filterByToEdit

    // const isValid = subject && isRead

    return (
        <section className="mail-filter container main-layout">
            <form onSubmit={onSubmitFilter}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <label htmlFor="subject"></label>
                <input onChange={handleChange} value={subject} placeholder="Search mail" name="subject" id="subject" type="text" />

                {/* 
                <label htmlFor="isRead">Price</label>
                <input onChange={handleChange} value={isRead || ''} name="isRead" id="isRead" type="number" />
                <button disabled={!isValid}>Submit</button> */}

            </form>
        </section>
    )
}
