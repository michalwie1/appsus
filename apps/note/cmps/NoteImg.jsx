export function NoteImg({ note }) {
    if (!note || !note.info) return null;

    return (
        <div className="img-preview">
                    {note.info.url && (
                        <img
                            src={note.info.url}
                            alt={note.info.title || 'Image Note'}
                            className="note-img"
                        />
                    )}
                    <div className = "img-preview-title">
                    {note.info.title && <h5>{note.info.title}</h5>}
                    </div>
                </div>
    );
}