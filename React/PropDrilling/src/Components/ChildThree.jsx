import React from 'react'
import ChildFour from './ChildFour'

const ChildThree = ({data}) => {
    console.log(`Child three has : `)
    console.log(data)
  return (
    <>
        <ChildFour data={data}/>
    </>
  )
}

export default ChildThree