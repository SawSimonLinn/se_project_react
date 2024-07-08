import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import closeIcon from '../../assets/close-icon.png';
import './Header.css';
import logo from '../../assets/wtwr°.svg';
import avatar from '../../assets/avatar.svg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

const Header = ({ handleAddClick, weatherData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const currentDate = new Date().toLocaleString('default', {
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className='header'>
      <div className='header__left'>
        <Link to='/se_project_react'>
          <img className='header__logo' src={logo} alt='WTWR Logo' />
        </Link>
        <p className='header__date-and-location'>
          {currentDate}, {weatherData.city}
        </p>
      </div>

      <div className='header__right'>
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type='button'
          className='header__add-clothes-button'
        >
          + Add clothes
        </button>
        <Link to='/se_project_react/profile' className='header__link'>
          <div className='header__user-info'>
            <p className='header__username'>Terrence Tegegne</p>
            <img className='header__user-avatar' src={avatar} alt='avatar' />
          </div>
        </Link>
      </div>

      <div className='header__hamburger' onClick={toggleMenu}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>

      {isOpen && (
        <div className='header__menu'>
          <button
            type='button'
            onClick={() => {
              toggleMenu();
            }}
            className='modal__close-btn'
          >
            <img src={closeIcon} alt='Close' draggable='false' />
          </button>
          <ToggleSwitch />
          <button
            onClick={() => {
              handleAddClick();
              toggleMenu();
            }}
            type='button'
            className='header__add-clothes-button'
          >
            + Add clothes
          </button>
          <Link
            to='/se_project_react/profile'
            className='header__link'
            onClick={() => {
              toggleMenu();
            }}
          >
            <div className='header__user-info'>
              <p className='header__username'>Terrence Tegegne</p>
              <img className='header__user-avatar' src={avatar} alt='avatar' />
            </div>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
