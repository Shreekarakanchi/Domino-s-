import React from 'react';
import Link from 'react'
import Payment from './Payment';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  // const taxPrice = itemsPrice * 0.14;
  // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  // const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const totalPrice=itemsPrice;
  
  
  return (
    <aside className="cart-page">
      <h2 className='cart-i'>Cart Items</h2>
      <div>


        {cartItems.length === 0 && <div>Cart is empty</div>}
        <hr></hr>
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div><img className="img" src={item.image}  />{item.name}</div>
            {/* <div className="col-2"></div> */}
            

            <div>
              <button onClick={() => onRemove(item)} className="remove btn-1"> -</button> {item.qty}
              <button onClick={() => onAdd(item)} className="add" id="btn11"> +</button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x &#8377;{item.price.toFixed(2)}

            </div>
            
            <hr />
          
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            {/* <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">&#8377;{itemsPrice.toFixed(2)}</div>
            </div> */}
            {/* <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">&#8377;{taxPrice.toFixed(2)}</div>
            </div> */}
            {/* <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
              &#8377;{shippingPrice.toFixed(2)}
              </div>
            </div> */}

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>&#8377;{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
          
          </>
        )}
        
      </div>
      
      <div className="row">
              {/* <button 
              onClick={() => alert('Thank you....!')} 
              className="btn-checkout">
                Checkout
              </button> */}
              <a href="https://pizzaonline.dominos.co.in/cart" >hhh</a>
            </div>
    </aside>
  );
}
