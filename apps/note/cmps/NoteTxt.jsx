export function NoteTxt({ note }) {
    if (!note || !note.info) return null;

    return (
        <div>
            <div className="preview-title">
            {note.info.title ?( <h5>{note.info.title}</h5> ):<h5 style={{ opacity: 0}}> null </h5> }
            </div>
            {note.info.txt && <p>{note.info.txt}</p>}
        </div>
    );
}