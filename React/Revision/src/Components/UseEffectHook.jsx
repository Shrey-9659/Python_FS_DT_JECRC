import React, { use, useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0)
    const [anothercount, setAnothercount] = useState(0)
        let handleIncrease = () => {
            setCount((count) => {
                return count + 1
            })
            setCount((count) => {
                return count + 1
            })
        }

    // No dependancy array
    // useEffect(() => {
    //     console.log("useEffect is running with no dependancy array")
    // })
    // Empty dependancy array
    // useEffect(() => {
    //     console.log("empty dependancy case is running")
    // }, [])
    // Dependancy array
    useEffect(() => {
        console.log("Runs during mounting and anotherCount change")
    }, [anothercount])
  return (
    <>
    <div>UseEffectHook</div>
    <button onClick={handleIncrease}>Increase</button>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
    <button onClick={() => setAnothercount(anothercount + 1)}>Increase</button>
        <h1>Count : {anothercount}</h1>
        <button onClick={() => setAnothercount(anothercount - 1)}>Decrease</button>
    </>
  )
}

export default UseEffectHook

 
// Initializing 
// Mounting
// Updating
// Unmounting

