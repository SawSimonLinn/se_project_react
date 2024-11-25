import './Profile.css';
import React from 'react';

import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';

const Profile = ({
  handleAddClick,
  handleCardClick,
  clothingItems,
  handleProfileChangeClick,
  handleLogOut,
  onCardLike,
  isAuthenticated,
}) => {
  const handleDataChange = () => {
    handleProfileChangeClick();
  };

  const handleLogout = () => {
    handleLogOut();
  };

  return (
    <div className='profile'>
      <div className='profile__sidebar'>
        <SideBar onDataChange={handleDataChange} onLogout={handleLogout} />
      </div>
      <div className='profile__clothing-items'>
        <ClothesSection
          handleAddClick={handleAddClick}
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
          onCardLike={onCardLike}
          isAuthenticated={isAuthenticated}
        />
      </div>
    </div>
  );
};

export default Profile;
