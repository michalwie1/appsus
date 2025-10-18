export function NoteTodo({ note }) {
    if (!note || !note.info) return null;

    return (
        <div>
            <h5>{note.info.title}</h5>
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