import React from 'react';
import './ItemCard.css';

const ItemCard = ({ item, onCardClick }) => {
  const handleCardClick = () => {
    onCardClick(item);
  };
  return (
    <li className='card__list-item'>
      <h2 className='card__title'>{item.name}</h2>
      <img
        onClick={handleCardClick}
        className='card__image'
        src={item.link}
        alt={item.name}
      />
    </li>
  );
};

export default ItemCard;
