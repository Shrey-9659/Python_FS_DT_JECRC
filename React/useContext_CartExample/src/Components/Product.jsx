import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'

const Product = ({product}) => {
    const {addToCart} = useContext(CartContext)
  return (
    <div>
        <center>
            <h3>{product.brand} {product.model}</h3>
            <p>Category : {product.name}</p>
            <p>Price : {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
            <hr />
        </center>

    </div>
  )
}

export default Product