const { useState } = React;

export function NoteAdd({ onAddNote, onChangetoCheckList, isCheckList,onChangetoText }) {
    const [note, setNote] = useState({ title: '', txt: '' });

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 'px';


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
        !isCheckList ? (
            <form onSubmit={onSubmit} className="note-add">
                <textarea
                    id="noteTitle"
                    name="title"
                    placeholder="Title"
                    className="note-title"
                    value={note.title}
                    onChange={handleChange}
                />

                <textarea
                    id="noteTxt"
                    name="txt"
                    placeholder="Type your note..."
                    className="note-txt"
                    value={note.txt}
                    onChange={handleChange}
                />

                <section className="input-types">
                    <i
                        className="material-symbols-outlined list-icon"
                        onClick={(ev) => onChangetoCheckList(ev)}
                    >
                        select_check_box
                    </i>
                </section>
            </form>
        ) : <form onSubmit={onSubmit} className="note-add">
            <textarea
                id="noteTitle"
                name="title"
                placeholder="Title"
                className="note-title"
                value={note.title}
                onChange={handleChange}
            />
               <textarea
                    id="noteTxt"
                    name="txt"
                    placeholder="checklistttt"
                    className="note-txt"
                    value={note.txt}
                    onChange={handleChange}
                />
            <section className="input-types">
                <i
                    className="material-symbols-outlined list-icon"
                    onClick={(ev) => onChangetoText(ev)}
                >
                    text_ad
                </i>
            </section>
        </form>

    )


}