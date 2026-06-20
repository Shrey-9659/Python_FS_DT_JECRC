import React, { useReducer, useState } from 'react'

const UseReducerHook = () => {
    // const [count, setCount] = useState(initialValue)
    const reducer = (state, action) => {
        if(action.type == "INC"){
            return state + 1
        }else if(action.type == "DEC"){
            return state - 1
        }
    }
    // const [count, dispatch] = useReducer(reducer, initialValue)
    const [count, dispatch] = useReducer(reducer, 0)
  return (
    <>
        <button onClick={() => dispatch({type : "INC"})}>Increase</button>
        <h1>{count}</h1>
        <button onClick={() => dispatch({type : "DEC"})}>Decrease</button>
    </>
  )
}

export default UseReducerHook