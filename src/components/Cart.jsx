import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { calculateTotal } from '../utils/calculateTotal';

class Cart extends Component {
  render() {
    const { cartItems, onCartRemoveItem } = this.props;
    let totalElement;
    let numInCart;

    if (cartItems.length > 0) {
      numInCart = <div className="number-of-items">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in cart</div>;
      totalElement = <div className="total">Total: ${calculateTotal(cartItems).toFixed(2)}</div>;
    } else {
      numInCart = <div className="number-of-items">Your cart is empty</div>
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
        <Link to="/" className="keep-shopping">
          <i className="fas fa-chevron-left"></i>Keep Shopping
        </Link>
      </aside>
    );
  }
}
 
export default Cart;

