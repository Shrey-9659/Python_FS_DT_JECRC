import { useState } from 'react'
import './App.css'
import GrabText from './GrabText'
import ToDoList from './ToDoList'
import Counter from './Counter'

function App() {
  let [count, setCount] = useState(0)
  let [toggle, setToggle] = useState(0)

  // let handleCount = () => {
  //   setCount(count + 1)
  // }
  return (
    <>
    {/* <GrabText /> */}
    {/* <ToDoList /> */}
    <button onClick={() => setToggle(!toggle)}>
      Click
    </button>

    {toggle ? <GrabText/> : <p></p>
    }

    <Counter />
      
    </>
  )
}

export default App
