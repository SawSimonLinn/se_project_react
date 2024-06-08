import './App.css';

import { coordinates, APIkey } from '../../utils/constants';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { getWeather, filterWeatherData } from '../../utils/weatherApi';

import { useEffect, useState } from 'react';
import ItemModal from '../ItemModal/ItemModal';

function App() {
  const [weatherData, setWeatherData] = useState({
    type: '',
    temp: { F: '', C: '0' },
    city: '',
  });

  const [activeModal, setActiveModal] = useState({});

  const [selectedGarment, setSelectedGarment] = useState({});

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

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then(data => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className='page'>
      <div className='page__content'>
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>

      <ModalWithForm
        title='New garment'
        btnText='Add garment'
        activeModal={activeModal}
        onClose={closeActiveModal}
      >
        <label htmlFor='name' className='modal__label'>
          Name{''}
          <input
            type='text'
            id='name'
            className='modal__input'
            placeholder='Name'
          />
        </label>
        <label htmlFor='imgUrl' className='modal__label'>
          Image{''}
          <input
            type='url'
            id='imgUrl'
            className='modal__input'
            placeholder='Image URL'
          />
        </label>
        <fieldset className='modal__radio-btns'>
          <legend className='modal__legend'>Select the weather type:</legend>
          <label htmlFor='hot' className='modal__radio'>
            <input type='radio' value='hot' className=' modal__radio-input' />
            Hot
          </label>
          <label htmlFor='warm' className='modal__radio'>
            <input type='radio' value='warm' className=' modal__radio-input' />
            Warm
          </label>
          <label htmlFor='cold' className='modal__radio'>
            <input type='radio' value='cold' className=' modal__radio-input' />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>

      <ItemModal
        activeModal={activeModal}
        card={selectedGarment}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
