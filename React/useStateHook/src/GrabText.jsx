import React, { useEffect, useState } from 'react'

const GrabText = () => {
    const [text, setText] = useState("")
    const [display, setDisplay] = useState("")
    let changeText = (event) => {
        setText(event.target.value)
    }
    let showText = () => {
        setDisplay(text)
    }

    useEffect(() => {
        alert("Component Mounted")
        return () => {
            alert("Unmounted component")
        }
    }, [])
  return (
    <>
        <section id='center'>
            <textarea
            type="text" 
            value={text}
            onChange={changeText}
            />
            <button
            className="counter"
            onClick={showText}
            >
                Click
            </button>
            <ol>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ol>
        </section>
    </>
  )
}

export default GrabText