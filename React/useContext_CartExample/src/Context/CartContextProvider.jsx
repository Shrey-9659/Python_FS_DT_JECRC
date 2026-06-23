import React, { useState } from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([])
  return (
    <CartContext.Provider value={{cart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider