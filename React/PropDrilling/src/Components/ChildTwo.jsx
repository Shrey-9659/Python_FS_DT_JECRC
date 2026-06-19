import React from 'react'

const ChildTwo = ({apidata, keyname}) => {
    apidata.map((user) => console.log(user[keyname]))
  return (
    <>
    {apidata.map((user) => <p>{user[keyname]}</p>)}
    </>
  )
}

export default ChildTwo