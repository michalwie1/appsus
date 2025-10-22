import { eventBusService } from '../services/event-bus.service.js'
const { useState, useEffect, useRef } = React

export function UserMsg() {

  const [msg, setMsg] = useState(null)
  const timeoutIdRef = useRef()

  useEffect(() => {
    const unsubscribe = eventBusService.on('show-user-msg', (msg) => {
      setMsg(msg)
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
        timeoutIdRef.current = null
      }
      timeoutIdRef.current = setTimeout(closeMsg, 3000)
    })
    return unsubscribe
  }, [])

  function closeMsg() {
    setMsg(null)
  }
  const className = (msg)? `${msg.type} ${msg.cmpClass} open` : '' 
  const btnClass = (msg)? `${msg.cmpClass}` : '' 
  return (
    <section className={`user-msg ${className}`}>
      <button className="btnClass" onClick={closeMsg}>x</button>
      {msg && msg.txt}
    </section>
  )
}

