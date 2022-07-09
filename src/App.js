import React, { useState } from 'react';
import ShoppingList from './components/shopping-list';
import MainBlock from './components/main-block';

import './styles/App.css';

function idGenerator(){
  let id = 0;
  return function(){
    return id++;
  }
}

const getId = new idGenerator();

function App() {
  const [shoppingItems, setItems] = useState([]);
  const [discount, setDiscount] = useState(0);

  const addNewItem = (id, name, price) => {
    setItems([...shoppingItems, 
      {
        id: id === '' ? 'Id' : id,
        systemId: getId(),
        name: name === '' ? 'Name' : name,
        price: price === '' ? 0 : price,
      }
    ])
  };

  const deleteItem = (id) => {
    const deleteIndex = shoppingItems.findIndex((item) => item.systemId === id);
    setItems(
      [
        ...shoppingItems.slice(0, deleteIndex),
        ...shoppingItems.slice(deleteIndex + 1)
      ]
    );
  }

  return (
    <div className='App'>
      <MainBlock items={shoppingItems} addFn={addNewItem} discount={discount} discountFn={setDiscount}/>
      <ShoppingList items={shoppingItems} discount={discount} deleteFn={deleteItem}/>
    </div>
  );
}

export default App;
