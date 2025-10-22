import { ColorPicker } from "./ColorPicker.jsx";
import { NoteTxt } from "./NoteTxt.jsx";
import { NoteTodo } from "./NoteTodo.jsx";
import { NoteImg } from "./NoteImg.jsx";

const { useState } = React


export function PinnedNotes({ note, setNoteModal, onChangeColor, onRemoveNote ,onPinNote,onDuplicateNote,onSave }) {
      const [isRemoved, setIsRemoved] = useState(false)
  
      if (!note) return null;
  

      const bgColor = (note.style && note.style.backgroundColor) ? note.style.backgroundColor : '#f7f7f7';
  
      function removeNote(ev, note) {
  
          onRemoveNote(ev, note)
          setIsRemoved(true)
      }

      const noteClass = (note.type !== 'NoteImg') ? "note-item" : "img-item"
  
      return (
          <article
              onClick={() => setNoteModal(note)}
              className= {noteClass}
              style={{ backgroundColor: bgColor, display: isRemoved ? "none" : "" }}
          >
  
              <span className="material-symbols-outlined pin pinned" onClick={(ev)=> onPinNote(ev,note)}>
                        keep
                    </span>  
         {note.type === 'NoteTxt' && note.info && (
                <NoteTxt note={note} />
            )}

            {note.type === 'NoteImg' && note.info && (
                <NoteImg note={note} />
            )}
            {note.type === 'NoteTodos' && note.info && note.info.todos && (
                <NoteTodo note={note}  onSave={onSave} />
            )}
            <div className="action-bar">
                <i
                    className="material-symbols-outlined"
                    onClick={(ev) => removeNote(ev, note)}
                >Delete</i>
                <i className="material-symbols-outlined"
                    onClick={(ev) => onDuplicateNote(ev, note)}>
                    content_copy
                </i>
                <ColorPicker note={note} onChangeColor={onChangeColor} />
            </div>
        </article>
    );
}