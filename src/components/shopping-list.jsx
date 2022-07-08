import React from 'react';
import Product from './product';

const ShoppingList = ({items}) => {
  console.log(items);
  return (
    <ul className='shopping-list'>
      {
        items.length === 0 ?
          <h2>Здесь пусто</h2> :
          items.map((item) => (
            <Product item={item} key={item.systemId}/>
          ))
      }
    </ul>
  );
};

export default ShoppingList;
