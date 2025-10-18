export function NoteImg({ note }) {
    if (!note || !note.info) return null;

    return (
        <div>
                    {note.info.title && <h5>{note.info.title}</h5>}
                    {note.info.url && (
                        <img
                            src={note.info.url}
                            alt={note.info.title || 'Image Note'}
                            style={{ maxWidth: '150px', borderRadius: '8px' }}
                        />
                    )}
                </div>
    );
}