import React from 'react'
import Child1 from './Child1'
import UserContextProvider from './Context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
      <Child1 />
    </UserContextProvider>
  )
}

export default App