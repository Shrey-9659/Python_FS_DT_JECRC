import React, { useState } from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const totalBill = cart.reduce((total, item) => {
        return total + item.price
    }, 0)

  return (
    <CartContext.Provider value={{cart, addToCart, totalBill}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider