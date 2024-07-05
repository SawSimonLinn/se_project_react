import React from 'react';
import './SideBar.css';
import avatar from '../../assets/avatar.svg';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <img className='sidebar__user-avatar' src={avatar} alt='default avatar' />
      <p className='sidebar__username'>Terrence Tegegne</p>
    </div>
  );
};

export default SideBar;
