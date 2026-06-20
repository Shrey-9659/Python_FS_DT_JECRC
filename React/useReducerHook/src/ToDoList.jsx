import React, {useReducer, useState} from 'react'

const ToDoList = () => {
        // const [text, setText] = useState("")
        // const [data,setData] = useState([])
        const reducer = (state, action) => {
            if(action.type == "Upd"){
                return {...state, text : action.value}
            }else if(action.type == "ADD_DATA"){
                return {...state, data : [...state.data, state.text], text : ""}
            }
        }

        const initialValue = {
            text : "",
            data : []
        }
        const [state, dispatch] = useReducer(reducer, initialValue)

        const handleChange = (e) => {
            return dispatch({type : "Upd", value : e.target.value})
        }
        // let addData = () => {
        //     setData([...data, text])
        //     setText("")
        // }

  return (
    <>
        <section id='center'>
            <textarea
            type="text" 
            value={state.text}
            onChange={handleChange}
            />
            <button
            className="counter"
            onClick={() => dispatch({type : "ADD_DATA"})}
            >
                Click
            </button>
            <ul>
                {state.data.map((user) => (
                    <li>{user}</li>
                ))}
            </ul>
        </section>
    </>
  )
}

export default ToDoList
