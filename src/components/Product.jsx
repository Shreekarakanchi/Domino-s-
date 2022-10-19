import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div id="pizza">
      <img className="small" src={product.image} alt={product.name} />
      <h3>Name:{product.name}</h3>
      <h4>{product.decription}</h4>
      <div className="card-price">Price: &#8377;{product.price} 
      <div>
        <button onClick={() => onAdd(product)} className='btn-3'>Add To Cart</button>
      </div></div>
    </div>
  );
}
