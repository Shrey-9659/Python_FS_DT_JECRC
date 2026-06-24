import React, { useState } from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({children}) => {
    const [cart,setCart] = useState([])

    const addToCart = (product) => {
        const exist = cart.find((item) => {
            return item.id === product.id
        })
        if(!exist){
            setCart([
                ...cart,
                {
                    ...product,
                    quantity : 1
                }
            ])
        }else{
            setCart([
                ...cart,
                {
                    ...product,
                    quantity : product.quantity + 1
                }
            ])
        }
        
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