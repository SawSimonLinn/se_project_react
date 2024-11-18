import React, { useContext } from 'react';
import './WeatherCard.css';

import { weatherOptions } from '../../utils/constants';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';

const WeatherCard = ({ weatherData }) => {
  const weatherOption = weatherOptions.find(option => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherData?.temp?.[currentTemperatureUnit] || 999;

  return (
    <section className='weather-card'>
      <p className='weather-card__temp'>{temp} &deg; F</p>
      <img
        src={weatherOption?.url}
        alt={`Card showing ${weatherOption?.isDay ? 'day ' : 'night '}time ${
          weatherOption?.condition
        } weather`}
        className='weather-card__image'
      />
    </section>
  );
};

export default WeatherCard;
