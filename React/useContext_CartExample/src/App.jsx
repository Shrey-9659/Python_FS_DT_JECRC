import React from 'react'
import Showproducts from './Components/Showproducts'
import NavBar from './Components/NavBar'
import Cart from './Components/Cart'
import CartContextProvider from './Context/CartContextProvider'

const App = () => {
  return (
    <CartContextProvider>
      <NavBar />
      <Showproducts />
      <Cart />
    </CartContextProvider>
  )
}

export default App