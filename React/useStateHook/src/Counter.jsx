import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)


    // useEffect(() => {
    // }, dependencyArray)
    // scenario 1 -- No dependancy Array 

    // useEffect(() => {
    //     alert("useEffect is triggered")
    // })

    // Empty Dependancy Array
    // useEffect(() => {
    //     alert("useEffect is triggered")
    // }, [])

    // Data in Dependancy Array
    // useEffect(() => {
    //     alert("useEffect is triggered")
    // }, [count])

  return (
    <>
    <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount(count + 1)}
        >
            Change Count
        </button>
        <p>{count}</p>
        <p>{num}</p>
        <button
          type="button"
          className="counter"
          onClick={() => setNum(num + 1)}
        >
            Change Num
        </button>
      </section>
    </>
  )
}

export default Counter