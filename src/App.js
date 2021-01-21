import React, { Component } from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    itemsForSale: [],
    itemsInCart: [],
  }

  componentDidMount() {
    const url = 'https://5ed0108416017c00165e327c.mockapi.io/api/v1/items';

    fetch(url)
    .then(result => result.json())
    .then(result => {
      this.setState({
        itemsForSale: result,
      });
    })
    .catch(error => console.log(error));
  }

  handleAddClick = (item) => {
    this.setState((prevState) => {
      return {
        itemsInCart: [...prevState.itemsInCart, {...item, cartId: Math.random()}],
      }
    });
  }

  handleRemoveCartItem = (id) => {
    this.setState((prevState) => {
      return {
        itemsInCart: prevState.itemsInCart.filter(item => item.cartId !== id)
      }
    });
  }

  render() {
    const { itemsForSale, itemsInCart } = this.state;

    return (
      <React.Fragment>
        <Header cartItems={itemsInCart}/>
        <div className="content">
          <Switch>
            <Route path="/Cart" render={props => <Cart cartItems={itemsInCart}
            onCartRemoveItem={this.handleRemoveCartItem} {...props}/>}/>
            <Route path="/" render={props => <Home itemsForSale={itemsForSale} onAddClick={this.handleAddClick} {...props}/>}/>
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;
