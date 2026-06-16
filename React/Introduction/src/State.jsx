import { useState } from "react"

const State = () => {
    let [value, setValue] = useState(0)
    let handleIncrease = () => {
        setValue(value + 1)
    }
    let handleDecrease = () => {
        setValue(value - 1)
    }
    
  return (
    <div>
        <button onClick={handleIncrease}>Inc</button>
        <span style={{margin: "5px"}}>{value}</span>
        <button onClick={handleDecrease}>Dec</button>
    </div>
  )
}

export default State