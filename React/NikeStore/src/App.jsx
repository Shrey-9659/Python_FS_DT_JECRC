import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import NikeStore from './Nikestore'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <NikeStore />
    </>
  )
}

export default App
