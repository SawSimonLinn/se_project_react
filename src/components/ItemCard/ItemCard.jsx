import React from 'react';
import './ItemCard.css';

const ItemCard = ({ item }) => {
  return (
    <li className='card__list-item'>
      <h2 className='card__title'>{item.name}</h2>
      <img className='card__image' src={item.link} alt={item.name} />
    </li>
  );
};

export default ItemCard;
