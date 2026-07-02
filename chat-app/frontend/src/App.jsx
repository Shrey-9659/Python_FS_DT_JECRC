import React from 'react'
import Login from './Login'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Register from './Register'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='*' element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App