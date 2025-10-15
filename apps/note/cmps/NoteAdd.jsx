const { useState } = React;

export function NoteAdd({ onAddNote }) {
    const [note, setNote] = useState({ title: '', txt: '' });

    function handleChange({ target }) {
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
        setNote(prevNote => ({ ...prevNote, [field]: value }));
    }

    function onSubmit(ev) {
        ev.preventDefault();
        if (!note.txt.trim() && !note.title.trim()) return;

        onAddNote(note); // send the whole object { title, txt }
        setNote({ title: '', txt: '' }); // reset form
    }

    return (
        <form onSubmit={onSubmit} className="note-add">
            <input
                id="noteTitle"
                type="text"
                name="title"
                placeholder="Note title"
                value={note.title}
                onChange={handleChange}
            /> 
            <p>
                <textarea
                    id="noteTxt"
                    name="txt"
                    placeholder="Type your note..."
                    value={note.txt}
                    onChange={handleChange}
                />
            </p>

            <button>Add</button>
        </form>
    );
}