import React from 'react'
import "./CartItems.css"
import CartItem from './CartItem'

function CartItems({ items }) {

  console.log(items);

  return (
    <div className="CartItems">
        <h1>Shopping Cart</h1>
        <hr />
        <div className="CartItems-items">
          {items.map((item ,index) => 
            <CartItem
              //  title={item.title}
              //  stock={item.stock} 
              //  quantity={item.quantity}
                price={item.price}
              //  images={item.image}
               item={item}
              key={index} 
              />
          )}
        </div>
    </div>
    
  )
  
}


export default CartItems