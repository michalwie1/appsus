import { ColorPicker } from "./ColorPicker.jsx";
const { useState, Fragment } = React;

export function EditModal({
    isOpen = false,
    onClose = () => { },
    note,
    onSave,
    onChangeColor,
    onRemoveNote,
    onDuplicateNote
}) {

    const [txt, setTxt] = useState(note.info.txt || '')
    const [todos, setTodos] = useState(note.info.todos ? note.info.todos.map(todo => ({ ...todo })) : [])

    const bgColor = (note.style && note.style.backgroundColor) ? note.style.backgroundColor : '#f7f7f7';


    function handleSave() {
        if (note.type === 'NoteTodos') {
            onSave({ ...note, info: { ...note.info, todos } });
        } else {
            onSave({ ...note, info: { ...note.info, txt } });
        }
        onClose();
    }

    function handleTodoChange({ target }, idx, field, value) {
        if (field === 'txt') {
            target.style.height = 'auto';
            target.style.height = target.scrollHeight + 'px';
        }

        const updated = [...todos];
        updated[idx][field] = value;
        setTodos(updated);
    }

    return (
        <Fragment>
            <section onClick={onClose} className="modal-backdrop"></section>
            <section className="modal-content" onClick={ev => ev.stopPropagation()} style={{ backgroundColor: bgColor }}>

                {note.type === 'NoteTodos' ? (
                    todos.map((todo, idx) => (
                        <div key={idx} className="todo-container">
                            <input
                                type="checkbox"
                                checked={todo.doneAt}
                                onChange={(ev) => handleTodoChange(ev,idx, 'doneAt', ev.target.checked)}
                                className="note-checkbox"
                            />
                            <textarea
                                type="text"
                                value={todo.txt}
                                placeholder="Todo item..."
                                onChange={(ev) => handleTodoChange(ev, idx, 'txt', ev.target.value)}
                            />
                        </div>
                    ))
                ) : (
                    <textarea
                        value={txt}
                        onChange={(ev) => setTxt(ev.target.value)}
                        rows={5}
                        style={{ backgroundColor: bgColor }}
                    />
                )}

                <div className='action-bar'>
                    <button onClick={handleSave}>Save</button>
                    <i
                        className="material-symbols-outlined"
                        onClick={(ev) => { onRemoveNote(ev, note); onClose(); }}
                    >Delete</i>
                    <i
                        className="material-symbols-outlined"
                        onClick={(ev) => onDuplicateNote(ev, note)}
                    >content_copy</i>
                    <ColorPicker note={note} onChangeColor={onChangeColor} />
                </div>
            </section>
        </Fragment>
    );
}