// import { ImgService } from "../services/img.service.js"
const { useState, useEffect, useRef } = React;

export function NoteAdd({
  onAddNote,
  onChangetoCheckList,
  isCheckList,
  onChangetoText,
  isImg,
  onChangeToImg
}) {
  const [note, setNote] = useState({ title: '', txt: '', todos: [''], imgUrl: '' })
  const formRef = useRef(null)
  const imgFileRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(ev) {
      if (formRef.current && !formRef.current.contains(ev.target)) {
        onSubmit(ev)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [note]) 

  function onUploadImg(ev) {
  const file = ev.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = ev => {
    setNote(prev => ({ ...prev, imgUrl: ev.target.result }))
  }
  reader.readAsDataURL(file)
}

  function handleChange({ target }, idx = null) {
    const field = target.name
    const value = target.value
    target.style.height = 'auto'
    target.style.height = target.scrollHeight + 'px'

    if (idx === null) {
      setNote(prev => ({ ...prev, [field]: value }))
    } else {
      const newTodos = [...note.todos]
      newTodos[idx] = value
      setNote(prev => ({ ...prev, todos: newTodos }))
    }
  }

  function onSubmit(ev) {
    // ev.preventDefault()
    if (!note.title.trim() && !note.txt.trim() && note.todos.every(todo => !todo.trim()) && !note.imgUrl) return
    onAddNote(note)
    setNote({ title: '', txt: '', todos: [''], imgUrl: '' })
  }

  function onRemoveInput(ev, idx) {
    ev.stopPropagation()
    setNote(prev => {
      const newTodos = prev.todos.filter((_, i) => i !== idx)
      return { ...prev, todos: newTodos.length ? newTodos : [''] }
    })
  }

  function onAddInput(ev) {
    ev.stopPropagation()
    setNote(prev => ({ ...prev, todos: [...prev.todos, ''] }))
  }

  if (isImg) {
    return (
      <form ref={formRef} onSubmit={onSubmit} className="note-add">
        <textarea
          name="title"
          placeholder="Title"
          className="note-title"
          value={note.title}
          onChange={handleChange}
        />
        <input ref={imgFileRef} type="file" accept="image/*" onChange={onUploadImg} />
        {note.imgUrl && <img src={note.imgUrl} alt="Uploaded" className="uploaded-img" />}

        <section className="input-types">
          <i className="material-symbols-outlined list-icon" onClick={onChangetoText}>text_ad</i>
          <i className="material-symbols-outlined list-icon" onClick={onChangetoCheckList}>select_check_box</i>
        </section>
        {/* <button>save</button> */}
      </form>
    )
  }

  if (isCheckList) {
    return (
      <form ref={formRef} onSubmit={onSubmit} className="note-add">
        <textarea
          name="title"
          placeholder="Title"
          className="note-title"
          value={note.title}
          onChange={handleChange}
        />
        {note.todos.map((todo, idx) => (
          <div key={idx} className="todo-line">
            <input type="checkbox" className="note-checkbox" />
            <input
              type="text"
              placeholder="Checklist item..."
              className="note-txt"
              value={todo}
              onChange={(ev) => handleChange(ev, idx)}
            />
            {note.todos.length > 1 && (
              <i className="material-symbols-outlined list-icon" onClick={(ev) => onRemoveInput(ev, idx)}>
                close
              </i>
            )}
            <i className="material-symbols-outlined list-icon" onClick={onAddInput}>add</i>
          </div>
        ))}
        <section className="input-types">
          <i className="material-symbols-outlined list-icon" onClick={onChangetoText}>text_ad</i>
          <i className="material-symbols-outlined list-icon" onClick={onChangeToImg}>image</i>
        </section>
        {/* <button>save</button> */}
      </form>
    )
  }

  // Default (Text Note)
  return (
    <form ref={formRef} onSubmit={onSubmit} className="note-add">
      <textarea
        name="title"
        placeholder="Title"
        className="note-title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        name="txt"
        placeholder="Type your note..."
        className="note-txt"
        value={note.txt}
        onChange={handleChange}
      />
      <section className="input-types">
        <i className="material-symbols-outlined list-icon" onClick={onChangetoCheckList}>select_check_box</i>
        <i className="material-symbols-outlined list-icon" onClick={onChangeToImg}>image</i>
      </section>
      {/* <button>save</button> */}
    </form>
  )
}