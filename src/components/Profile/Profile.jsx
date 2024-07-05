import React from 'react';
import './Profile.css';

import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';

const Profile = ({ handleAddClick, handleCardClick, clothingItems }) => {
  return (
    <div className='profile'>
      <div className='profile__sidebar'>
        <SideBar />
      </div>
      <div className='profile__clothing-items'>
        <ClothesSection
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
        />
      </div>
    </div>
  );
};

export default Profile;
