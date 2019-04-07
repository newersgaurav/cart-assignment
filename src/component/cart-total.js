import React from 'react';
import './cart-total.css';

function CartTotal(props) {

  return (
    <div className="total">
        <h3>Total</h3>
        {
            
          isNaN(props.total) ? (function(){throw new Error ("can't be NaN")}())  : <p className="total-value">{props.total}</p>
        }

        
   
       
      
    </div>
  )
}

export default CartTotal;