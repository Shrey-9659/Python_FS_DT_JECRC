import React, { useState } from 'react'
import Employee from './Employee'

const App = () => {
  const userData = [
  {
    "id": 1,
    "name": "Aarav Sharma",
    "department": "Computer Science",
    "active": true
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "department": "Mechanical Engineering",
    "active": true
  },
  {
    "id": 3,
    "name": "Rohan Gupta",
    "department": "Electrical Engineering",
    "active": false
  },
  {
    "id": 4,
    "name": "Sneha Patel",
    "department": "Civil Engineering",
    "active": true
  },
  {
    "id": 5,
    "name": "Karan Singh",
    "department": "Information Technology",
    "active": false
  },
  {
    "id": 6,
    "name": "Ananya Mehta",
    "department": "Electronics",
    "active": true
  },
  {
    "id": 7,
    "name": "Vikram Rao",
    "department": "Computer Science",
    "active": true
  },
  {
    "id": 8,
    "name": "Neha Kapoor",
    "department": "Biotechnology",
    "active": false
  },
  {
    "id": 9,
    "name": "Arjun Nair",
    "department": "Chemical Engineering",
    "active": true
  },
  {
    "id": 10,
    "name": "Isha Joshi",
    "department": "Mathematics",
    "active": true
  }
]


const [employee, setEmployee] = useState(userData)
const totalEmp = employee.length
const activeEmp = (employee.filter((user) => user.active)).length
const inactiveEmp = totalEmp - activeEmp

const toggleEmpStatus = (id) => {
  console.log("second")
  setEmployee(employee.map((emp) => (
    emp.id === id ? {...emp, active : !emp.active} : emp
  )))
}


  return (
    <>
    <div>
      <p>Total Employee : {totalEmp}</p>
      <p>Active Employee : {activeEmp}</p>
      <p>Inactive Employee : {inactiveEmp}</p>
    </div>
    <div>
      {!activeEmp ? <strong style={{color : "red"}}>No Active User</strong> : ""}
    </div>
    {employee.map(user => <Employee user={user} toggleEmpStatus={toggleEmpStatus} key={user.id}/>)}
    </>
  )
}

export default App