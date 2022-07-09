import React from 'react';

const Product = ({item, discount, deleteFn}) => {
  const {id, name, price, systemId} = item
  return (
    <li className="shopping-list__item">
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <h3>{id}</h3>
      {discount !== 0 ? 
        <div className='price-block'>
          <p className='old-price'>{price}</p>
          <p className='new-price'>{(price * Number(1 - (discount / 100).toFixed(2))).toFixed(2)}</p> 
        </div> :
        <div className='price-block'>
          <p>{price}</p> 
        </div>
      }
      <button onClick={() => {deleteFn(systemId)}}>Удалить</button>
    </li>
  );
};

export default Product;
