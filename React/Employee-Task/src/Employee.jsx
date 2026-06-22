import React from 'react'

const Employee = ({user, toggleEmpStatus}) => {
    const handleClick = () => {
        console.log("first")
        toggleEmpStatus(user.id)
    }
  return (
    <>
        <div>
            <h1>{user.name}</h1>
            <h2>{user.department} || {user.active ? "Active" : "Inactive"}</h2>
            <button onClick={handleClick}>{user.active ? "Active" : "Inactive"}</button>
            <hr />
        </div>
    </>
  )
}

export default Employee