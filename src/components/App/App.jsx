import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import AddItemModal from '../AddItemModal/AddItemModal';
import ItemModal from '../ItemModal/ItemModal';
import Profile from '../Profile/Profile';

import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';

import { coordinates, APIkey } from '../../utils/constants';
import { getItems } from '../../utils/api';
import { getWeather, filterWeatherData } from '../../utils/weatherApi';

function App() {
  const [weatherData, setWeatherData] = useState({
    type: '',
    temp: { F: '', C: '0' },
    city: '',
  });

  const [activeModal, setActiveModal] = useState('');
  const [selectedGarment, setSelectedGarment] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [clothingItems, setClothingItems] = useState([]);

  const handleCardClick = card => {
    setActiveModal('preview-garment');
    setSelectedGarment(card);
  };

  const handleAddClick = () => {
    setActiveModal('add-garment');
  };

  const closeActiveModal = () => {
    setActiveModal('');
  };

  const onAddItem = values => {
    console.log(values);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === 'C'
      ? setCurrentTemperatureUnit('F')
      : setCurrentTemperatureUnit('C');
  };
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then(data => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then(data => {
        console.log(data);
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className='page'>
      <CurrentTemperatureUnitContext.Provider
        value={{
          currentTemperatureUnit,
          handleToggleSwitchChange,
        }}
      >
        <div className='page__content'>
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />

          <Routes>
            <Route
              path='/'
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path='/profile'
              element={
                <Profile
                  handleAddClick={handleAddClick}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>

          <Footer />
        </div>

        <AddItemModal
          activeModal={activeModal}
          handleAddClick={handleAddClick}
          onClose={closeActiveModal}
          onAddItem={onAddItem}
        />

        <ItemModal
          activeModal={activeModal}
          card={selectedGarment}
          onClose={closeActiveModal}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
