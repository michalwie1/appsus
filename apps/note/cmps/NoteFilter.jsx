const { useState, useEffect } = React

export function NoteFilter({ defaultFilter, onSetFilterBy }) {

    const [filterByToEdit, setFilterByToEdit] = useState(defaultFilter)

    useEffect(() => {
        onSetFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break
            case 'checkbox':
                value = target.checked
                break
        }

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilterBy(filterByToEdit)
    }

    const { txt, type } = filterByToEdit

    return (
        <section >
            <form onSubmit={onSubmitFilter}className="note-filter">
                <input
                    onChange={handleChange}
                    value={txt}
                    name="txt"
                    id="txt"
                    type="text"
                    placeholder="Search"
                    
                />
                <select
                    name="type"
                    id="type"
                    value={type}
                    onChange={handleChange}
                >
                    <option value="">All</option>
                    <option value="NoteTxt">Text</option>
                    <option value="NoteImg">Image</option>
                    <option value="NoteTodos">Todos</option>
                </select>
            </form>
        </section>
    )
}