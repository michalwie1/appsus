export function NoteTodo({ note }) {
    if (!note || !note.info) return null;

    return (
        <div>
            <div className="preview-title">
            {note.info.title && <h5>{note.info.title}</h5>}
            </div>
            <br />
            {note.info.todos.map((todo, idx) => (
                <div
                    key={idx}
                    style={{ textDecoration: todo.doneAt ? 'line-through' : 'none' }}
                >
                    {todo.txt} {todo.doneAt ? '✔' : '❌'}
                </div>
            ))}
        </div>
    );
}