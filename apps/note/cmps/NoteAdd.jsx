const { useState } = React;

export function NoteAdd({ onAddNote, onChangetoCheckList, isCheckList, onChangetoText }) {
    const [note, setNote] = useState({ title: '', txt: '', todos: [''] });

    function handleChange({ target }, idx = null) {
        const field = target.name;
        let value = target.value;

        // auto height for textareas
        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 'px';

        // update normal text fields
        if (idx === null) {
            setNote(prev => ({ ...prev, [field]: value }));
        } else {
            // update checklist input
            const newTodos = [...note.todos];
            newTodos[idx] = value;
            setNote(prev => ({ ...prev, todos: newTodos }));
        }
    }

    function onSubmit(ev) {
        ev.preventDefault();
        if (!note.title.trim() && !note.txt.trim() && note.todos.every(todo => !todo.trim())) return;

        onAddNote(note);
        setNote({ title: '', txt: '', todos: [''] });
    }

    function onRemoveInput(ev, idx) {
        ev.stopPropagation()
        setNote(prev => {
            const newTodos = prev.todos.filter((_, i) => i !== idx);
            return { ...prev, todos: newTodos.length ? newTodos : [''] };
        });
    }
    
    function onAddInput(ev) {
        ev.stopPropagation()
        setNote(prev => ({ ...prev, todos: [...prev.todos, ''] }));
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
                        onClick={onChangetoCheckList}
                    >
                        select_check_box
                    </i>
                </section>
                <button>save</button>
            </form>
        ) : (
            <form onSubmit={onSubmit} className="note-add">
                <textarea
                    id="noteTitle"
                    name="title"
                    placeholder="Title"
                    className="note-title"
                    value={note.title}
                    onChange={handleChange}
                />

                {/* checklist inputs */}
                {note.todos.map((todo, idx) => (
                    <div key={idx}>
                        <input
                            type="checkbox"
                            className="note-checkbox"
                        />
                        <input
                            type="text"
                            placeholder="Checklist item..."
                            className="note-txt"
                            value={todo}
                            onChange={(ev) => handleChange(ev, idx)}
                        />
                        {note.todos.length > 1 &&
                        <i
                        className="material-symbols-outlined list-icon"
                        onClick={(ev) => onRemoveInput(ev, idx)}
                        >
                            close
                        </i>
                    }
                        <i
                        className="material-symbols-outlined list-icon"
                        onClick={ev => onAddInput(ev)}
                        >
                            add
                        </i>
                    </div>
                ))}

                <section className="input-types">
                    <i
                        className="material-symbols-outlined list-icon"
                        onClick={onChangetoText}
                    >
                        text_ad
                    </i>
                </section>
                <button>save</button>
            </form>
        )
    );
}


