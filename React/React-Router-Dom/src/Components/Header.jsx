import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
        <div className="logo">MyLogo</div>

        <nav className="navbar">
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </ul>
        </nav>
    </header>
  )
}

export default Header