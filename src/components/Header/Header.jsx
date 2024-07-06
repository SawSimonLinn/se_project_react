import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../../assets/wtwr°.svg';
import avatar from '../../assets/avatar.svg';
import ToggleSwich from '../ToggleSwitch/ToggleSwitch';

const Header = ({ handleAddClick, weatherData }) => {
  const currentDate = new Date().toLocaleString('default', {
    month: 'long',
    day: 'numeric',
  });

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
        <ToggleSwich />

        <button
          onClick={handleAddClick}
          type='button'
          className='header__add-clothes-button'
        >
          + Add clothes
        </button>
        <Link to='/profile' className='header__link'>
          <div className='header__user-info'>
            <p className='header__username'>Terrence Tegegne</p>
            <img className='header__user-avatar' src={avatar} alt='avatar' />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
