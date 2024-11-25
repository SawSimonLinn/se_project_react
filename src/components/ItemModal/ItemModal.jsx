import React, { useContext } from 'react';
import closeIconWhite from '../../assets/close-icon-white.png';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './ItemModal.css';

const ItemModal = ({ isOpen, onClose, card, onDelete }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className={`modal ${isOpen === 'preview-garment' && 'modal_opened'}`}>
      <div className='modal__content modal__content_type-img'>
        <button type='button' onClick={onClose}>
          <img
            src={closeIconWhite}
            alt='Close'
            draggable='false'
            className='modal__close-btn'
          />
        </button>
        <img
          className='modal__img'
          draggable='false'
          src={card.imageUrl}
          alt={card.name}
        />
        <div className='modal__footer'>
          <div className='modal__footer-label'>
            <h2 className='modal__text'>{card.name}</h2>
            <p className='modal__weather'>Weather: {card.weather}</p>
          </div>
          {currentUser && currentUser._id === card.owner && (
            <div className='modal__footer-delete'>
              <button
                type='button'
                className='modal__delete-btn'
                onClick={() => onDelete(card)}
              >
                Delete item
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
