import React, { useEffect, useState } from 'react'

const Fetchuser = () => {
    const [users,setUsers] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("data is fetched")
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(rawData => rawData.json())
        .then(response => setUsers(response))
    }, [])
  return (
    <>
        <button onClick={fetchData}>{count}</button>
        <section id="center">
            {users.map((user) => (
                <p>{user.name}</p>
            ))}
        </section>
    </>
  )
}

export default Fetchuser