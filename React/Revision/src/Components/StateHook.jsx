import React, { useState } from 'react'

const StateHook = () => {
    let num = 0
    const [count, setCount] = useState(0)
    let handleIncrease = () => {
        setCount((count) => {
            return count + 1
        })
        setCount((count) => {
            return count + 1
        })
    }
  return (
    <>
        <button onClick={handleIncrease}>Increase</button>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  )
}

export default StateHook