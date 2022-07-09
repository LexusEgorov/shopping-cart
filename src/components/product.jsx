import React from 'react';

const Product = ({item, deleteFn}) => {
  const {id, name, price, systemId} = item
  return (
    <li className="shopping-list__item">
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <h3>{id}</h3>
      <p>{price}</p>
      <button onClick={() => {deleteFn(systemId)}}>Удалить</button>
    </li>
  );
};

export default Product;
