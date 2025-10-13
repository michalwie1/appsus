const { useState, useEffect, Fragment } = React

export function NoteAdd({ onAddNote }) {
    const [txt, setTxt] = useState('')

    function handleChange(ev) {
        setTxt(ev.target.value)
    }

    function onSubmit(ev) {
        ev.preventDefault()
        if (!txt.trim()) return

        onAddNote(txt)
        setTxt('')
    }

    

    return (
        <form onSubmit={onSubmit} className="note-add">
            <label htmlFor="noteTxt">Write a note</label>
            <input
                id="noteTxt"
                type="text"
                name="txt"
                placeholder="Type your note..."
                value={txt}
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
    )
}