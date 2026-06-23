import React, { useState } from 'react'
import UserContext from './Usercontext'

const UserContextProvider = ({children}) => {
    const [userData, setUserData] = useState("Lorem")
  return (
    <UserContext.Provider value={{userData, setUserData}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider