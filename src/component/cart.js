import React from "react";
import './cart.css'

const Cart = props => {
  return (
    <tr>
      <td>{props.data.name}</td>
      <td>{props.data.quantity}</td>
      <td>{props.data.price}</td>
      <td>{(props.data.price)*(props.data.quantity)}</td>
      <td>
        <button className="cart-buttons" onClick={()=>props.handleMinus(props.data.index)}>-</button>
      </td>
      <td>
        <button className="cart-buttons" onClick={()=>props.handlePlus(props.data.index)}>+</button>
      </td>
      <td>
        <button className="cart-buttons" onClick={()=>props.handleTrash(props.data.index)}>X</button>
      </td>
    </tr>
  );
};

export default Cart;
