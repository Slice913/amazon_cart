import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal';
import data from './Data';

function App() {

  const [cartItems, setCartItems] = useState(data);

  return (
    <div className="App">
        <Header title="Amazon Cart"/>
        <div className="App-main">
          <CartItems items={cartItems} setCartItems={setCartItems} /> 
          <CartTotal items={cartItems} />
        </div>
    </div>
  )
}

// * same outcome but using React.createElement
// function App() {
//   const elCreate = React.createElement;
//   return (
//     elCreate('div', {className: 'App'},
//       elCreate('div', {className: 'App-header'},
//         elCreate('h1', {className: 'Amazon-Cart'}, 'Amazon cart')
//       )
//     )
//   );
// }

export default App;
