import React from 'react'
import "./Components/Header.css"
import "./Components/Footer.css"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Layout from './Layout'
import About from './Components/About'
import Contact from './Components/Contact'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App