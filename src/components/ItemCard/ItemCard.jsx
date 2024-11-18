import './ItemCard.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import React, { useContext } from 'react';

const ItemCard = ({ item, onCardClick, onCardLike, isAuthenticated }) => {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes.some(likeId => likeId === currentUser?._id);

  const itemLikeButton = isLiked
    ? 'card__like-button-active'
    : 'card__like-button';

  const handleLikeClick = e => {
    e.preventDefault();
    onCardLike(item._id, isLiked);
  };

  return (
    <li className='card__list-item'>
      <div className='card__header'>
        <h2 className='card__title'>{item.name}</h2>
        {isAuthenticated && (
          <button
            className={itemLikeButton}
            type='button'
            onClick={handleLikeClick}
          ></button>
        )}
      </div>
      <img
        onClick={handleCardClick}
        className='card__image'
        draggable='false'
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
};

export default ItemCard;
