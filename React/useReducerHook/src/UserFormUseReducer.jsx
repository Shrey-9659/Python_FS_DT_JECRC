import React, {useReducer, useState} from 'react'

const UserFormUseReducer = () => {
      const initialValue = {
        name : "",
        college : "",
        branch : "",
        year : ""
      }
      const reducer = (state, action) => {
        if(action.type == "UPD_NAME"){
            return {
                ...state,
                name : action.value
            }
        }else if(action.type == "UPD_COLLEGE"){
            return {
                ...state,
                college : action.value
            }
        }else if(action.type == "UPD_BRANCH"){
            return {
                ...state,
                branch : action.value
            }
        }else if(action.type == "UPD_YEAR"){
            return {
                ...state,
                year : action.value
            }
        }
      }
      const [state, dispatch] = useReducer(reducer, initialValue)
      const handleName = (e) => {
        dispatch({
            type : "UPD_NAME",
            value : e.target.value
        })
      }
      const handleCollege = (e) => {
        dispatch({
            type : "UPD_COLLEGE",
            value : e.target.value
        })
      }
      const handleBranch = (e) => {
        dispatch({
            type : "UPD_BRANCH",
            value : e.target.value
        })
      }
      const handleYear = (e) => {
        dispatch({
            type : "UPD_YEAR",
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
              onChange={handleName}
              />
              <input
              type="text"
              name="college"
              id=""
              placeholder='Enter College...'
              value={state.college}
              onChange={handleCollege}
              />
              <input
              type="text"
              name="branch"
              id=""
              placeholder='Enter Branch...'
              value={state.branch}
              onChange={handleBranch}
              />
              <input
              type="text"
              name="year"
              id=""
              placeholder='Enter Year...'
              value={state.year}
              onChange={handleYear}
              />
              <button type='submit'>Submit</button>
          </form>
      </>
    )
  }

export default UserFormUseReducer