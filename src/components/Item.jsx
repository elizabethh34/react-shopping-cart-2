import React from 'react';

const Item = (props) => {
  const { item, onAddClick } = props;
  
  return (
    <li className="item">
      <img src={item.imageURL} alt={item.name}/>
      <h2>{item.name}</h2>
      <div className="price">{item.price}</div>
      <div className="description">{item.description}</div>
      <button onClick={() => onAddClick(item)}>Add to Cart</button>
    </li>
  );
}
 
export default Item;