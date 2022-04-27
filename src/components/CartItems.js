import React from 'react'
import "./CartItems.css"
import CartItem from './CartItem'

function CartItems({ items }) {
  console.log("items in cartItems", items);
  return (
    <div className="CartItems">
        <h1>Shopping Cart</h1>
        <hr />
        <div className="CartItems-items">
          <CartItem />
        </div>
    </div>
    
  )
  
}

export default CartItems