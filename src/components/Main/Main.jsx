import React, { useContext } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';

import './Main.css';
import ItemCard from '../ItemCard/ItemCard';

const Main = ({ weatherData, handleCardClick, clothingItems }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherData?.temp?.[currentTemperatureUnit] || 999;

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className='card'>
        <p className='card__text'>
          Today is {temp}&deg; F / You may want to wear:
        </p>

        <ul className='card__list'>
          {clothingItems
            .filter(item => {
              return item.weather === weatherData.type;
            })
            .map(item => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
};

export default Main;
