import React from 'react'
import "./CartItems.css"
import CartItem from './CartItem'

function CartItems({ items, setCartItems }) {

  const changeItemQuantity = (e, index) => {
    //  when we change a quantity on item, we pass it in here
    // pass in the index
    // using the index we need to change the quantity to the selected one from option
    // update the items state for re-render
    //! DO NOT DATE THE STATE WITHOUT SETTER FUNCTION
    const newItems = [...items]
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
    console.log(items);

  }

  const deleteItem = ( indexToDelete ) =>{
    // filter out the items where the item index does not equak to the selected item index    
    const newItems = items.filter((value, index)=>{
      return index !== indexToDelete
    })
      setCartItems(newItems);
  }

  return (
    <div className="CartItems">
        <h1>Shopping Cart</h1>
        <hr />
        <div className="CartItems-items">
          {items.map((item ,index) => 
            <CartItem
              index={index}
              item={item}
              key={index}
              changeItemQuantity={changeItemQuantity}
              deleteItem={deleteItem}
              />
          )}
        </div>
    </div>
    
  )
  
}


export default CartItems