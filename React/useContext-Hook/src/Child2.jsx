import React, { useContext } from 'react'
import Child3 from './Child3'
import UserContext from './Context/Usercontext'

const Child2 = () => {
    const {userData, setUserData} = useContext(UserContext)
  return (
    <div>
        <input type="text" value={userData} onChange={(e) => setUserData(e.target.value)}/>
    </div>
  )
}

export default Child2