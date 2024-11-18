import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function LogInModal({ isOpen, onClose, onLogin, handleSignupClick }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({ email: '', password: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onLogin(formData);
    clearForm();
  };

  const isFormValid = formData.email && formData.password;

  return (
    <ModalWithForm
      title='Log In'
      btnText='Log In'
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      secondaryBtnText='or Sign Up'
      onSecondaryBtnClick={handleSignupClick}
      isSubmitDisabled={!isFormValid}
    >
      <label htmlFor='email' className='modal__label'>
        Email
        <input
          type='text'
          className='modal__input'
          id='Email'
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='password' className='modal__label'>
        Password
        <input
          type='text'
          className='modal__input'
          id='Password'
          placeholder='Password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}
export default LogInModal;
