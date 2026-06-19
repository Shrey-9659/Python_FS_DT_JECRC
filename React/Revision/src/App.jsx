import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MainApp from './Components/MainApp'
import CallName from './Components/CallName'
import StateHook from './Components/StateHook'
import Conditionals from './Components/Conditionals'
import UseEffectHook from './Components/UseEffectHook'

function App() {
  // const data = [
  //   {"name" : "shrey"},
  //   {"name" : "rohit"},
  //   {"name" : "rahul"},
  //   {"name" : "ajay"},
  //   {"name" : "kunal"},
  // ]
  const [toggle, setToggle] = useState(0)
  const handleToggle = () => {
    setToggle(!toggle)
    // if(toggle == 0) setToggle(1)
    // else setToggle(0)
  }
  return (
    <>
    <UseEffectHook />
    {/* <button onClick= {handleToggle}>Click me</button>
    {toggle ? <Conditionals /> : <p></p>} */}
    {/* <StateHook /> */}
    {/* {data.map((user, index) => (
      <CallName key={index} name = {user.name}/>
    ))} */}
      {/* <CallName name="Shrey" year={2026}/>
      <CallName name="Rohit" year={2025}/>
      <CallName name="Rahul" year={2024}/> */}
      {/* <MainApp /> */}
      {/* <p>Hello World</p> */}
    </>
  )
}

export default App


// condition ? true : false