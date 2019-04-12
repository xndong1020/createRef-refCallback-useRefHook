import React, { useRef } from 'react'
import './App.css'

const App = props => {
  const inputEl = useRef(null)

  const handleChange = () => {
    console.log(inputEl.current.value)
  }
  
  return (
    <div>
      <input type="text" ref={inputEl} onChange={handleChange} />
    </div>
  )
}

export default App
