import { useState } from 'react'
import ToDoApp from './To-Do-App/ToDoApp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToDoApp></ToDoApp>
    </>
  )
}

export default App
