export function NoteTxt({ note }) {
    if (!note || !note.info) return null;

    return (
        <div>
            {note.info.title && <h5>{note.info.title}</h5>}
            {note.info.txt && <p>{note.info.txt}</p>}
        </div>
    );
}