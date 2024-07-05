import React from 'react';
import './ClothesSection.css';
import ItemCard from '../ItemCard/ItemCard';

const ClothesSection = ({ handleAddClick, handleCardClick, clothingItems }) => {
  return (
    <div className='clothes-section'>
      <div className='clothes-section_element'>
        <p className='clothes-section_element__text'>Your Items</p>
        <button
          className='clothes-section_element__button'
          type='button'
          onClick={handleAddClick}
        >
          + Add New
        </button>
      </div>
      <div className='clothes-section_items'>
        <ul className='clothes-section_items__card__list card__list'>
          {clothingItems.map(item => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ClothesSection;
