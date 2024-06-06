import WeatherCard from '../WeatherCard/WeatherCard';
import React from 'react';
import './Main.css';
import tshirt from '../../assets/tshirt.png';
import shorts from '../../assets/shorts.png';
import cap from '../../assets/cap.png';
import sneaker from '../../assets/sneaker.png';

const Main = () => {
  return (
    <main>
      <WeatherCard />
      <section className='card'>
        <p className='card__text'>Today is 75&deg; F / You may want to wear:</p>

        <ul className='card__list'>
          <li className='card__list-item'>
            <h1 className='card__title'>T-Shirt</h1>
            <img src={tshirt} alt='' className='card__image' />
          </li>
          <li className='card__list-item'>
            <h1 className='card__title'>Shorts</h1>
            <img src={shorts} alt='' className='card__image' />
          </li>
          <li className='card__list-item'>
            <h1 className='card__title'>Cap</h1>
            <img src={cap} alt='' className='card__image' />
          </li>
          <li className='card__list-item'>
            <h1 className='card__title'>Sneaker</h1>
            <img src={sneaker} alt='' className='card__image' />
          </li>
          <li className='card__list-item'>
            <h1 className='card__title'>T-Shirt</h1>
            <img src={tshirt} alt='' className='card__image' />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Main;
