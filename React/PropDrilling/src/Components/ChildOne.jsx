import React, { useState } from 'react'
import ChildThree from './ChildThree'

const ChildOne = ({apidata, setApidata, keyname, setKeyname}) => {
    const [api, setApi] = useState("")
    const handleClick = async() => {
       let rawData = await fetch(api)
       let response = await rawData.json()
       setApidata(response)
    }

  return (
    <>
        <input type="text" value={api} onChange={(e) => setApi(e.target.value)} placeholder='Enter API'/>
        <input type="text" value={keyname} onChange={(e) => setKeyname(e.target.value)} placeholder='Enter KEY'/>
        <button onClick={handleClick}>Fetch Data</button>
    </>
  )
}

export default ChildOne