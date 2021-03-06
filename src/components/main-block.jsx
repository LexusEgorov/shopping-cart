import React, { useState } from 'react';

const MainBlock = ({items, addFn, discount, discountFn}) => {
  let price = 0;

  const [stateDiscount, setDiscount] = useState('');
  const [stateId, setId] = useState('');
  const [stateName, setName] = useState('');
  const [statePrice, setPrice] = useState('');
  
  for(const item of items){
    price += item.price * (((100 - discount) / 100).toFixed(2));
  }

  price = isNaN(price) ? 0 : price;

  return (
    <div className="main-block">
      <div className="statistics">
        <p>Количество: {items.length}</p>
        <p>Стоимость: {price}</p>
        <p>Скидка: {discount}%</p>
      </div>
      <div className="controls">
        <form className="add-form">
          <input required type="number" id="id" className="id" min="0" 
            value={stateId}
            onChange={(evt) => setId(Number(evt.target.value))} 
            placeholder="id товара"/>
          <input required type="text" id="name" className="name" 
            value={stateName} 
            onChange={(evt) => setName(evt.target.value)}
            placeholder="Название товара"/>
          <input required type="number" id="price" className="price" min="0" 
            value={statePrice} 
            onChange={(evt) => setPrice(Number(evt.target.value))}
            placeholder="Стоимость товара"/>
          <button type="submit" 
            onClick={(evt) => {
              evt.preventDefault();
              addFn(stateId, stateName, statePrice)
            }}>
              Добавить
          </button>
        </form>
        <div className="discount">
          <input type="number" min="0" max="100" placeholder="Скидка"
          value={stateDiscount}
          onChange={(evt) => setDiscount(
            Number(evt.target.value) > 100 ? 100 :
              Number(evt.target.value) < 0 ? 0 : Number(evt.target.value)
            )}
          />
          <button 
            onClick={(evt) => {
              evt.preventDefault();
              discountFn(stateDiscount);
            }
            }>Установить скидку</button>
          <button
            onClick={(evt) => {
              evt.preventDefault();
              discountFn(0);
            }
          }>Убрать скидки</button>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
