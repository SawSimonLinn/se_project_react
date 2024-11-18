import './Header.css';

import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import closeIcon from '../../assets/close-icon.png';
import logo from '../../assets/wtwr°.svg';

import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

import CurrentUserContext from '../../contexts/CurrentUserContext';

const Header = ({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleSignupClick,
  handleLoginClick,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString('default', {
    month: 'long',
    day: 'numeric',
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='header'>
      <div className='header__left'>
        <Link to='/'>
          <img className='header__logo' src={logo} alt='WTWR Logo' />
        </Link>

        <p className='header__date-and-location'>
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className='header__right'>
        <ToggleSwitch />
        {isLoggedIn ? (
          <div className='header__right'>
            <button
              onClick={handleAddClick}
              type='button'
              className='header__add-clothes-button'
            >
              + Add clothes
            </button>
            <Link to='/profile' className='header__link'>
              <div className='header__user-info'>
                <p className='header__username'>{currentUser.name}</p>
                <img
                  className='header__user-avatar'
                  src={currentUser.avatar}
                  alt='avatar'
                />
              </div>
            </Link>
          </div>
        ) : (
          <>
            <button
              type='button'
              className='header__registration-button'
              onClick={handleSignupClick}
            >
              Sign up
            </button>
            <button
              type='button'
              className='header__registration-button'
              onClick={handleLoginClick}
            >
              Log In
            </button>
          </>
        )}
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
            to='/profile'
            className='header__link'
            onClick={() => {
              toggleMenu();
            }}
          >
            <div className='header__user-info'>
              <p className='header__username'>{currentUser.name}</p>
              <img
                className='header__user-avatar'
                src={currentUser.avatar}
                alt='avatar'
              />
            </div>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
