import React from 'react'

const Product = ({product}) => {
  return (
    <div>
        <center>
            <h3>{product.brand} {product.model}</h3>
            <p>Category : {product.name}</p>
            <p>Price : {product.price}</p>
            <button onClick={handleAddCart}>Add to cart</button>
            <hr />
        </center>

    </div>
  )
}

export default Product