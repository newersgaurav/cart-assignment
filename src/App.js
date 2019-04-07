import React, { Component } from 'react';
import './App.css';
import CartManager from './component/cart-manager';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MY CART</h1>
        <CartManager/>
      </div>
    );
  }
}

export default App;
