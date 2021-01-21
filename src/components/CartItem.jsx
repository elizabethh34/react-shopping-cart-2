import React from 'react';

const CartItem = (props) => {
  const { item, onRemoveItem } = props;

  return (
    <li className="cart-item">
      <div className="name">{item.name}</div>
      <button onClick={() => onRemoveItem(item.cartId)}>X</button>
      <div className="price">@ {item.price}</div>
    </li>
  );
}
 
export default CartItem;