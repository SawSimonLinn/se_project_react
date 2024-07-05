import React, { useState } from 'react';
import ModalWithForm from '../../components/ModalWithForm/ModalWithForm';

const AddItemModal = ({ activeModal, onClose, onAddItem }) => {
  const [name, setName] = useState('');
  const handleNameChange = e => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState('');
  const handleUrlChange = e => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weatherType, setWeatherType] = useState('');
  const handleWeatherTypeChange = e => {
    console.log(e.target.value);
    setWeatherType(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddItem({ name, link, weatherType });
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
          value={link}
          onChange={handleUrlChange}
        />
      </label>
      <fieldset className='modal__radio-btns'>
        <legend className='modal__legend'>Select the weather type:</legend>
        <label htmlFor='hot' className='modal__radio'>
          <input
            name='weatherType'
            type='radio'
            id='hot'
            value='hot'
            onChange={handleWeatherTypeChange}
            className=' modal__radio-input'
          />
          Hot
        </label>
        <label htmlFor='warm' className='modal__radio'>
          <input
            name='weatherType'
            type='radio'
            id='warm'
            value='warm'
            onChange={handleWeatherTypeChange}
            className=' modal__radio-input'
          />
          Warm
        </label>
        <label htmlFor='cold' className='modal__radio'>
          <input
            name='weatherType'
            type='radio'
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
