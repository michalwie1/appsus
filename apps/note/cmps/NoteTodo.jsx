const { Fragment } = React;

export function NoteTodo({ note, onSave }) {
    if (!note || !note.info) return null;

    const bgColor = (note.style && note.style.backgroundColor) ? note.style.backgroundColor : "#f7f7f7";

    function handleTodoChange(ev, idx, field, value) {
        ev.stopPropagation();

        if (field === "txt") {
            ev.target.style.height = "auto";
            ev.target.style.height = ev.target.scrollHeight + "px";
        }

        const updatedTodos = note.info.todos.map((todo, i) =>
            i === idx ? { ...todo, [field]: value } : todo
        );

        onSave({ ...note, info: { ...note.info, todos: updatedTodos } });
    }

    function preventOpenModal(ev) {
        ev.stopPropagation();
    }

    return (
        <div className="note-todo-preview" style={{ backgroundColor: bgColor, marginBottom: "13px" }}>
            {note.info.title && <h5 className="preview-title">{note.info.title}</h5>}
            <br />

            {note.info.todos.map((todo, idx) => (
                <div key={idx} className="todo-container" onClick={preventOpenModal}>
                    <i
                        className="material-symbols-outlined note-checkbox"
                        onClick={(ev) => handleTodoChange(ev, idx, "doneAt", !todo.doneAt)}
                    >
                        {todo.doneAt ? "check_box" : "check_box_outline_blank"}
                    </i>

                    <textarea
                        value={todo.txt}
                        placeholder="Todo item..."
                        onChange={(ev) => handleTodoChange(ev, idx, "txt", ev.target.value)}
                        className="todo-textarea"
                        style={{ resize: "none", overflow: "hidden", backgroundColor: bgColor }}
                    />
                </div>
            ))}
        </div>
    );
}