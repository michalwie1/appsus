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
        <section className="note-filter">
            <form onSubmit={onSubmitFilter}>
                <label htmlFor="txt">filter   </label>
                <input
                    onChange={handleChange}
                    value={txt}
                    name="txt"
                    id="txt"
                    type="text"
                    placeholder="Search notes..."
                />

                <label htmlFor="type">  filter type  </label>
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