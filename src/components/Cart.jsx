import React, { Component } from 'react';

import CartItem from './CartItem';

class Cart extends Component {
  calculateCartTotal = (items) => {
    let total = 0;
    
    for (const item of items) {
      total += item.price;
    }

    return total;
  }

  render() {
    const { cartItems, onCartRemoveItem } = this.props;
    let totalElement;
    let numInCart;

    if (cartItems.length > 0) {
      numInCart = <div className="number-of-items">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in cart</div>;
      totalElement = <div className="total">Total: ${this.calculateCartTotal(cartItems).toFixed(2)}</div>;
    } else {
      numInCart = '';
      totalElement = '';
    }

    return (
      <aside className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map((cartItem) => {
            return (
              <CartItem
                key={Math.random()}
                item={cartItem}
                onRemoveItem={onCartRemoveItem}
              />
            );
          })}
        </ul>
        {numInCart}
        {totalElement}
      </aside>
    );
  }
}
 
export default Cart;

