import './Header.css';
import logo from '../../assets/wtwr°.svg';
import avatar from '../../assets/avatar.svg';

const Header = ({ handleAddClick }) => {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='' />
      <p className='header__date-and-location'>June 15, California</p>
      <button
        onClick={handleAddClick}
        type='button'
        className='header__add-clothes-button'
      >
        + Add clothes
      </button>
      <div className='header__user-info'>
        <p className='header__username'>Terrence Tegegne</p>
        <img className='header__user-avatar' src={avatar} alt='' />
      </div>
    </header>
  );
};

export default Header;
