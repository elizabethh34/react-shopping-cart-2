import React, { Component } from 'react';
import Item from './components/Item';
import Cart from './components/Cart';

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
        <header><h1>mouseHeav3an</h1></header>
        <main>
          <ul className="items">
            {itemsForSale.map((item) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  onAddClick={this.handleAddClick}
                />
              );
            })}
          </ul>
          <Cart
            cartItems={itemsInCart}
            onCartRemoveItem={this.handleRemoveCartItem}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
