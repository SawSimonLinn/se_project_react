import WeatherCard from '../WeatherCard/WeatherCard';
import React from 'react';
import './Main.css';
import { defaultClothingItems } from '../../utils/constants';
import ItemCard from '../ItemCard/ItemCard';

const Main = ({ weatherData }) => {
  return (
    <main>
      <WeatherCard />
      <section className='card'>
        <p className='card__text'>Today is 75&deg; F / You may want to wear:</p>

        <ul className='card__list'>
          {defaultClothingItems
            // .filter(item => {
            //   return item.weather === weatherData.type;
            // })
            .map(item => {
              return <ItemCard key={item._id} item={item} />;
            })}
        </ul>
      </section>
    </main>
  );
};

export default Main;
