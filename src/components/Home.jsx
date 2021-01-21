import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {
  render() {
    const { itemsForSale, onAddClick } = this.props;

    return (
      <React.Fragment>
        <main>
          <ul className="items">
            {itemsForSale.map((item) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  onAddClick={onAddClick}
                />
              );
            })}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}
 
export default Home;
