import React from 'react'
import items from "../assets/Items.json"
import Product from './Product'
const Showproducts = () => {
  return (
    <>
        {items.map((product, index) => <Product product={product} key={index}/>)}
    </>
  )
}

export default Showproducts