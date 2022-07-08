import React from 'react';

const Product = ({item}) => {
  const {id, name, price} = item
  return (
    <li className="shopping-list__item">
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <h3>{id}</h3>
      <p>{price}</p>
      <button>Удалить</button>
    </li>
  );
};

export default Product;
