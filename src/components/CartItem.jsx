import React from 'react';

const CartItem = (props) => {
  const { item, onRemoveItem } = props;

  return (
    <li className="cart-item">
      <div className="name">{item.name}</div>
      <div className="price">@ {item.price}</div>
      <button onClick={() => onRemoveItem(item.cartId)}><i className="far fa-times-circle"></i></button>
    </li>
  );
}
 
export default CartItem;