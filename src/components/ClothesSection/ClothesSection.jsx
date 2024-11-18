import './ClothesSection.css';

import React, { useContext } from 'react';
import ItemCard from '../ItemCard/ItemCard';

import CurrentUserContext from '../../contexts/CurrentUserContext';

const ClothesSection = ({
  handleAddClick,
  handleCardClick,
  clothingItems,
  onCardLike,
  isAuthenticated,
}) => {
  const currentUser = useContext(CurrentUserContext);
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
          {clothingItems
            .filter(item => {
              return item.owner === currentUser._id;
            })
            .map(item => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  onCardLike={onCardLike}
                  isAuthenticated={isAuthenticated}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ClothesSection;

// import { React, useContext } from 'react';
// import ItemCard from '../ItemCard/ItemCard';
// import './ClothesSection.css';
// import CurrentUserContext from '../../contexts/CurrentUserContext';

// const ClothesSection = ({
//   handleAddClick,
//   handleCardClick,
//   clothingItems,
//   onCardLike,
//   isAuthenticated,
// }) => {
//   const { currentUser } = useContext(CurrentUserContext);
//   return (
//     <div className='clothes-section'>
//       <div className='clothes-section_element'>
//         <p className='clothes-section_element__text'>Your Items</p>
//         <button
//           className='clothes-section_element__button'
//           type='button'
//           onClick={handleAddClick}
//         >
//           + Add New
//         </button>
//       </div>
//       <div className='clothes-section_items'>
//         <ul className='clothes-section_items__card__list card__list'>
//           {clothingItems
//             .filter(item => {
//               return item.owner === currentUser._id;
//             })
//             .map(item => {
//               return (
//                 <ItemCard
//                   key={item._id}
//                   item={item}
//                   onCardClick={handleCardClick}
//                   onCardLike={onCardLike}
//                   isAuthenticated={isAuthenticated}
//                 />
//               );
//             })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ClothesSection;
