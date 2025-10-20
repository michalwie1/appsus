import { NotePreview } from "./NotePreview.jsx"
import { PinnedNotes } from "./PinnedNotes.jsx"

const  {Fragment} = React

export function NoteList({
  notes,
  setNoteModal,
  onChangeColor,
  onRemoveNote,
  onPinNote,
  onDuplicateNote,
   onSave
}) {
  if (!notes || !notes.length) return <p>No notes to show</p>;

  const pinnedNotes = notes.filter(note => note.isPinned);
  const otherNotes = notes.filter(note => !note.isPinned);

  return (
    <section>
      {pinnedNotes.length > 0 && (
        <Fragment>

          <h3 className="note-section-title">📌 Pinned</h3>
          <section className="note-list pinned">
            {pinnedNotes.map(note => (
                <PinnedNotes
                key={note.id}
                note={note}
                setNoteModal={setNoteModal}
                onChangeColor={onChangeColor}
                onRemoveNote={onRemoveNote}
                onPinNote={onPinNote}
                onDuplicateNote = {onDuplicateNote}
                  onSave={onSave}
                />
            ))}
          </section>
            </Fragment>
        
      )}

      {otherNotes.length > 0 && (
        <Fragment>

          {pinnedNotes.length > 0 && (
              <h3 className="note-section-title">All Notes</h3>
            )}
          <section className="note-list">
            {otherNotes.map(note => (
                <NotePreview
                key={note.id}
                note={note}
                setNoteModal={setNoteModal}
                onChangeColor={onChangeColor}
                onRemoveNote={onRemoveNote}
                onPinNote={onPinNote}
                onDuplicateNote = {onDuplicateNote}
                 onSave={onSave}
                />
            ))}
          </section>
            </Fragment>
       
      )}
    </section>
  );
}