import WeatherCard from '../WeatherCard/WeatherCard';

import './Main.css';
import { defaultClothingItems } from '../../utils/constants';
import ItemCard from '../ItemCard/ItemCard';

const Main = ({ weatherData, handleCardClick }) => {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className='card'>
        <p className='card__text'>
          Today is {weatherData.temp.F}&deg; F / You may want to wear:
        </p>

        <ul className='card__list'>
          {defaultClothingItems
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
