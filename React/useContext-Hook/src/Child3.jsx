import React, { useContext } from 'react'
import UserContext from './Context/Usercontext'

const Child3 = () => {
    const {userData} = useContext(UserContext)
  return (
    <div>{userData}</div>
  )
}

export default Child3