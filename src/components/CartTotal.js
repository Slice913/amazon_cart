import React from 'react'
import './CartTotal.css'
import NumberFormat from 'react-number-format';

function CartTotal( { items } ) {

  const getTotalPrice = ( ) => {
    // initialize total price to zero 
    // loop through all the items in the cart 
    // add the total price of the item with the total quantity to total price
    // return the total price
      let total = 0; 
      items.forEach((item)=>{
        total += (item.price * item.quantity)
        console.log(items);
      })

    console.log("Total Price" );
    return total;
  }
      // getting the correct total quantity of items in cart.

  const getTotalQuanity = () => {
  //  const totalItems = items.reduce((inCart,item) => inCart+ item.quantity,0);
   let totalItems = 0; // initailized quantity total to zero
    items.forEach((item) => { // loops through each item in cart and gets Qty
      totalItems += Number(item.quantity)
    }) 
    console.log(totalItems);
    return totalItems; // returns the total 
  }   
  return (
    <div className="CartTotal">
        <h3>
          Subtotal({getTotalQuanity()} items): 
          <span className="CartTotal-price">
            <NumberFormat 
             value={getTotalPrice()} 
             displayType={'text'} 
             thousandSeparator={true} 
             decimalScale={2}
             prefix={'$'} />
          </span>
        </h3>
        <button>
          Proceed to Checkout
        </button>
    </div>
  )
}

export default CartTotal

