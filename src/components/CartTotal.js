import React from 'react'
import './CartTotal.css'
import cartItems from './CartItems'


function CartTotal( { items } ) {

  const getTotalPrice = ( ) => {
    // initialize total price to zero 
    // loop through all the items in the cart 
    // add the total price of the item with the total quantity to total price
    // return the total price
      let total = 0; 
      items.forEach((item)=>{
        total += (item.price * item.quantity)
        // todo: round the total price up.
      })
      
    console.log("Total Price" );
    return total;
  }

  return (
    <div className="CartTotal">
        <h3>
          Subtotal({items.length} items):
          <span className="CartTotal-price">
            {getTotalPrice()}
          </span>
        </h3>
        <button>
          Proceed to Checkout
        </button>
    </div>
  )
}

export default CartTotal

