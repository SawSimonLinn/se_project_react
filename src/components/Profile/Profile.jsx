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
    console.log('Data change button clicked');
  };

  const handleLogout = () => {
    handleLogOut();
    console.log('Logout button clicked');
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
