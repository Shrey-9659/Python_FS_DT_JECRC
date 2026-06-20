import React, { useState } from 'react'

const UserForm = () => {
    const [name, setName] = useState("")
    const [college, setCollege] = useState("")
    const [branch, setBranch] = useState("")
    const [year, setYear] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`
            Name : ${name}
            College : ${college}
            Branch : ${branch}
            Year : ${year}`
        )
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            id=""
            placeholder='Enter Name...'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input
            type="text"
            name="college"
            id=""
            placeholder='Enter College...'
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            />
            <input
            type="text"
            name="branch"
            id=""
            placeholder='Enter Branch...'
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            />
            <input
            type="text"
            name="year"
            id=""
            placeholder='Enter Year...'
            value={year}
            onChange={(e) => setYear(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default UserForm