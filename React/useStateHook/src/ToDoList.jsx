import React, {useState} from 'react'

const ToDoList = () => {
        const [text, setText] = useState("")
        const [data,setData] = useState([])
        const myarray = ["shrey","rohit"]
        let addData = () => {
            setData([...data, text])
            setText("")
            // [["shrey","rohit"], "lorem"]
            // ["shrey","rohit", "lorem"]

        }

  return (
    <>
        <section id='center'>
            <textarea
            type="text" 
            value={text}
            onChange={(event) => setText(event.target.value)}
            />
            <button
            className="counter"
            onClick={addData}
            >
                Click
            </button>
            <ul>
                {data.map((user) => (
                    <li>{user}</li>
                ))}
            </ul>
        </section>
    </>
  )
}

export default ToDoList