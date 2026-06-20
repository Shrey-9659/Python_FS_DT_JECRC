import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UseReducerHook from './UseReducerHook'
import ToDoList from './ToDoList'
import UserForm from './UserForm'
import UserFormUseReducer from './UserFormUseReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseReducerHook /> */}
      {/* <ToDoList /> */}
      {/* <UserForm /> */}
      <UserFormUseReducer />
    </>
  )
}

export default App
