import React, {useReducer, useState} from 'react'

const UserFormUseReducer = () => {
      const initialValue = {
        name : "",
        college : "",
        branch : "",
        year : ""
      }
      const reducer = (state, action) => {
        if(action.type == "UPD"){
            return {
                ...state,
                [action.field] : action.value
            }
      }
    }
      const [state, dispatch] = useReducer(reducer, initialValue)
      const handleChange = (e) => {
        dispatch({
            type : "UPD",
            field : e.target.name,
            value : e.target.value
        })
      }
      
      const handleSubmit = (e) => {
        e.preventDefault()
        alert(`
            Name : ${state.name}
            College : ${state.college}
            Branch : ${state.branch}
            Year : ${state.year}`
        )
      }
      
    return (
      <>
          <form onSubmit={handleSubmit}>
              <input
              type="text"
              name="name"
              id=""
              placeholder='Enter Name...'
              value={state.name}
              onChange={handleChange}
              />
              <input
              type="text"
              name="college"
              id=""
              placeholder='Enter College...'
              value={state.college}
              onChange={handleChange}
              />
              <input
              type="text"
              name="branch"
              id=""
              placeholder='Enter Branch...'
              value={state.branch}
              onChange={handleChange}
              />
              <input
              type="text"
              name="year"
              id=""
              placeholder='Enter Year...'
              value={state.year}
              onChange={handleChange}
              />
              <button type='submit'>Submit</button>
          </form>
      </>
    )
  }

export default UserFormUseReducer