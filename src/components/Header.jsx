import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center" id='shop-head'>
      <div>
        <a href="#/">
          <h1>Dominos Mart</h1>
        </a>
      </div>
      <div className='butti'>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (<button className="badge">{props.countCartItems}</button>) : ( '')}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}
