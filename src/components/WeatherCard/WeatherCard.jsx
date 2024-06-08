import './WeatherCard.css';

import { weatherOptions } from '../../utils/constants';

const WeatherCard = ({ weatherData }) => {
  const filterOptions = weatherOptions.filter(option => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherOption = filterOptions[0];

  return (
    <section className='weather-card'>
      <p className='weather-card__temp'>{weatherData.temp.F} &deg; F</p>
      <img
        src={weatherOption?.url}
        alt={`Card showing ${weatherOption?.isDay ? 'day' : 'night'}time ${
          weatherOption?.condition
        } weather`}
        className='weather-card__image'
      />
    </section>
  );
};

export default WeatherCard;
