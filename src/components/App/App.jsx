import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import AddItemModal from '../AddItemModal/AddItemModal';
import ItemModal from '../ItemModal/ItemModal';
import Profile from '../Profile/Profile';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';

import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';

import { coordinates, APIkey } from '../../utils/constants';
import { getItems, deleteItem, addItem } from '../../utils/api';
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

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === 'F' ? 'C' : 'F');
  };

  const openDeleteConfirmModal = card => {
    setActiveModal('delete-garment');
    setSelectedGarment(card);
  };

  const handleDeleteCard = card => {
    deleteItem(card._id)
      .then(() => {
        setClothingItems(prevItems =>
          prevItems.filter(item => item._id !== card._id)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  const onAddItem = async (values, onDone) => {
    try {
      const newItem = await addItem(values);
      setClothingItems(prevItems => [newItem, ...prevItems]);
      onDone();
    } catch (error) {
      console.error(error);
    }
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
              path='/se_project_react'
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path='/se_project_react/profile'
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
          handleDeleteCard={handleDeleteCard}
          openDeleteConfirmModal={openDeleteConfirmModal}
        />

        <DeleteConfirmModal
          onClose={closeActiveModal}
          isOpen={activeModal === 'delete-garment'}
          handleDeleteCard={handleDeleteCard}
          card={selectedGarment}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
