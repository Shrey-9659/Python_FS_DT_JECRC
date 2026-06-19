import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Fetchuser from './Fetchuser'

function App() {
  const [time,setTime] = useState(new Date())
  useEffect(() => {
    let timeId = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => {
      clearInterval(timeId)
    }
  }, [])
  return (
    <>
    <Fetchuser />
      {/* <section id="center">
       <p style={{fontSize: "2.6rem", color: "whitesmoke", fontWeight: "bold"}}>{time.toLocaleTimeString()}</p>
      </section> */}
    </>
  )
}

export default App
