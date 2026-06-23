import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'

const NavBar = () => {
    const {cart} = useContext(CartContext)
    console.log(cart)
  return (
    <div>
        <center>
        <h2>Total item : {cart.length}</h2>
        </center>
    </div>
  )
}

export default NavBar