import './SideBar.css';
import React, { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const SideBar = ({ onDataChange, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <div className='sidebar'>
        <img
          className='sidebar__user-avatar'
          src={currentUser.avatar}
          alt='default avatar'
        />
        <p className='sidebar__username'>{currentUser.name}</p>
      </div>
      <div className='sidebar__button'>
        <button
          className='sidebar__data_change'
          type='button'
          onClick={onDataChange}
        >
          Change profile data
        </button>
        <button className='sidebar__logout' type='button' onClick={onLogout}>
          Log out
        </button>
      </div>
    </>
  );
};

export default SideBar;
