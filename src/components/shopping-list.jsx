import React from 'react';
import Product from './product';

const ShoppingList = ({items, deleteFn}) => {
  return (
    <ul className='shopping-list'>
      {
        items.length === 0 ?
          <h2>Здесь пусто</h2> :
          items.map((item) => (
            <Product item={item} deleteFn={deleteFn} key={item.systemId}/>
          ))
      }
    </ul>
  );
};

export default ShoppingList;
