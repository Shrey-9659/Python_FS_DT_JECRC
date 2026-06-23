import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'

const Cart = () => {
    const {cart, totalBill} = useContext(CartContext)
  return (
    <div>
        <center>
            <h1>Total Bill : {totalBill}</h1>
            {cart.map((item, index) => (
                <h2 key={index}>{item.brand} {item.model} -- {item.price}</h2>
            ))}
        </center>
    </div>
  )
}

export default Cart