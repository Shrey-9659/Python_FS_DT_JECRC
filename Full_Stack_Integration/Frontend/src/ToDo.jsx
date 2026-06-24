import React, { use, useEffect, useState } from 'react'

const ToDo = () => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [data,setData] = useState("")
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/v1/tasks/")
        .then(rawData => rawData.json())
        .then(res => {
            setTasks(res)
            setLoading(false)
        })
        .catch(err => {
            setLoading(false)
            console.log(err)
    })
    }, [])

    const handleClick = () => {
        fetch("http://127.0.0.1:8000/api/v1/tasks/", {
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify({"task" : data})
        })
    }
    if(loading) return <h1>Tasks Loading</h1>
  return (
    <>
        <h1>To-DO APP</h1>
        <hr />
        {/* Add tasks */}
        <input type="text" name="" id="" value={data} onChange={(e) => setData(e.target.value)}/>
        <button onClick={handleClick}>Add Task</button>
        {/* Showing tasks */}
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task.task} || Completed : {task.isCompleted ? "True" : "False"}</li>

            ))}
        </ul>
    </>
  )
}

export default ToDo