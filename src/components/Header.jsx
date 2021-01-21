import React from 'react';
import { Link } from 'react-router-dom';
import { calculateTotal } from '../utils/calculateTotal';

const Header = (props) => {
  const { cartItems } = props;
  
  return (
    <header>
      <Link to="/"><h1>MouseHeavan</h1></Link>
      <Link to="/Cart" className="cart-icon">
        <div className="cart-icon-values">
          <div className="cart-total">$ {calculateTotal(cartItems).toFixed(2)}</div>
          <div className="in-cart-items">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</div>
        </div>
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </header>
  );
}
 
export default Header;