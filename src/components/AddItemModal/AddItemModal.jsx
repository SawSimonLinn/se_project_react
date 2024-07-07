import React, { useState } from 'react';
import ModalWithForm from '../../components/ModalWithForm/ModalWithForm';
import './AddItemModal.css';

const AddItemModal = ({ activeModal, onClose, onAddItem }) => {
  const [name, setName] = useState('');
  const [imageUrl, setUrl] = useState('');
  const [weather, setWeatherType] = useState('hot');

  const formIsValid = () => {
    return name !== '' && imageUrl !== '' && weather !== '';
  };

  const handleNameChange = e => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleUrlChange = e => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const handleWeatherTypeChange = e => {
    console.log(e.target.value);
    setWeatherType(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formIsValid()) {
      onAddItem({ name, imageUrl, weather }, () => {
        setName('');
        setUrl('');
        setWeatherType('hot');
        onClose();
      });
    }
  };
  return (
    <ModalWithForm
      title='New garment'
      btnText='Add garment'
      isOpen={activeModal === 'add-garment'}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor='name' className='modal__label'>
        Name{''}
        <input
          type='text'
          id='name'
          className='modal__input'
          placeholder='Name'
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label htmlFor='imgUrl' className='modal__label'>
        Image{''}
        <input
          type='url'
          id='imgUrl'
          className='modal__input'
          placeholder='Image URL'
          value={imageUrl}
          onChange={handleUrlChange}
        />
      </label>
      <fieldset className='modal__radio-btns'>
        <legend className='modal__legend'>Select the weather type:</legend>
        <label
          htmlFor='hot'
          className={`modal__radio ${weather !== 'hot' ? 'faded' : ''}`}
        >
          <input
            name='weather'
            type='radio'
            checked={weather === 'hot'}
            id='hot'
            value='hot'
            onChange={handleWeatherTypeChange}
            className=' modal__radio-input'
          />
          Hot
        </label>
        <label
          htmlFor='warm'
          className={`modal__radio ${weather !== 'warm' ? 'faded' : ''}`}
        >
          <input
            name='weather'
            type='radio'
            checked={weather === 'warm'}
            id='warm'
            value='warm'
            onChange={handleWeatherTypeChange}
            className=' modal__radio-input'
          />
          Warm
        </label>
        <label
          htmlFor='cold'
          className={`modal__radio ${weather !== 'cold' ? 'faded' : ''}`}
        >
          <input
            name='weather'
            type='radio'
            checked={weather === 'cold'}
            id='cold'
            value='cold'
            onChange={handleWeatherTypeChange}
            className=' modal__radio-input'
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
