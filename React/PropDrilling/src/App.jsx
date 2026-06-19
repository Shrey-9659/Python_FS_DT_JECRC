import { useState } from "react"
import ChildOne from "./Components/ChildOne"
import ChildTwo from "./Components/ChildTwo"


function App() {
    const [text, setText] = useState("")
    const [apidata, setApidata] = useState([])
    const [keyname, setKeyname] = useState("")
    
  const data = {
    name : "JECRC Foundation"
  }
  return (
    <>
      <ChildOne apidata={apidata} setApidata={setApidata} keyname={keyname} setKeyname={setKeyname}/>
      <ChildTwo apidata={apidata} keyname={keyname}/>
    </>
  )
}

export default App
