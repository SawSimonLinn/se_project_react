import React, { useState, useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './AddItemModal.css';

const AddItemModal = ({ onClose, onAddItem, isOpen, btnText }) => {
  const [values, setValues] = useState({ name: '', imageUrl: '', weather: '' });

  useEffect(() => {
    if (isOpen) {
      clearForm();
    }
  }, [isOpen]);

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setValues({ name: '', imageUrl: '', weather: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddItem(values)
      .then(() => {
        clearForm();
        setTimeout(() => {
          onClose();
        }, 1000); // 1 second delay before closing the modal
      })
      .catch(error => {
        console.error('Error adding item:', error);
      });
  };

  const isFormValid = values.name && values.imageUrl && values.weather;

  return (
    <ModalWithForm
      title='New garment'
      btnText={btnText}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isSubmitDisabled={!isFormValid}
    >
      <label htmlFor='name' className='modal__label'>
        Name
        <input
          type='text'
          id='name'
          className='modal__input'
          name='name'
          placeholder='Name'
          value={values.name}
          onChange={handleChange}
          autoComplete='name'
        />
      </label>
      <label htmlFor='imageUrl1' className='modal__label'>
        Image URL
        <input
          type='url'
          id='imageUrl1'
          className='modal__input'
          name='imageUrl'
          placeholder='Image URL'
          value={values.imageUrl}
          onChange={handleChange}
          autoComplete='url'
        />
      </label>
      <fieldset className='modal__radio-btns'>
        <legend className='modal__legend'>Select the weather type:</legend>
        <label
          htmlFor='hot'
          className={`modal__radio ${values.weather !== 'hot' ? 'faded' : ''}`}
        >
          <input
            name='weather'
            type='radio'
            checked={values.weather === 'hot'}
            id='hot'
            value='hot'
            onChange={handleChange}
            className=' modal__radio-input'
          />
          Hot
        </label>
        <label
          htmlFor='warm'
          className={`modal__radio ${values.weather !== 'warm' ? 'faded' : ''}`}
        >
          <input
            name='weather'
            type='radio'
            checked={values.weather === 'warm'}
            id='warm'
            value='warm'
            onChange={handleChange}
            className=' modal__radio-input'
          />
          Warm
        </label>
        <label
          htmlFor='cold'
          className={`modal__radio ${values.weather !== 'cold' ? 'faded' : ''}`}
        >
          <input
            name='weather'
            type='radio'
            checked={values.weather === 'cold'}
            id='cold'
            value='cold'
            onChange={handleChange}
            className=' modal__radio-input'
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
