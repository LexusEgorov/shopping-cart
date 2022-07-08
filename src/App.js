import React, { useState } from 'react';
import ShoppingList from './components/shopping-list';
import MainBlock from './components/main-block';

import './styles/App.css';

function idGenerator(){
  let id = 0;
  return function(){
    return id++ - 1;
  }
}

const getId = new idGenerator();

function App() {
  const [shoppingItems, setItems] = useState([])

  const addNewPost = (id, name, price) => {
    setItems([...shoppingItems, 
      {
        id: id,
        systemId: getId(),
        name: name,
        price: price,
      }
    ])
    
  };

  return (
    <div className='App'>
      <MainBlock items={shoppingItems} addFn={addNewPost}/>
      <ShoppingList items={shoppingItems}/>
    </div>
  );
}

export default App;
