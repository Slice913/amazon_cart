import React from 'react';
import './App.css';
import Header from './Header.js';

function App() {

  return (
    <div className="App">
        <Header title="Amazon Cart"/>
    </div>
  )
}

// * same above but using React.createElement
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
