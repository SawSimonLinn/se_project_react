import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function RegisterModal({ isOpen, onClose, onSignup, handleLoginClick }) {
  const [values, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    avatarUrl: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({ email: '', password: '', name: '', avatarUrl: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSignup(values);
    clearForm();
  };

  const isFormValid =
    values.email && values.password && values.name && values.avatarUrl;

  return (
    <ModalWithForm
      title='Sign up'
      btnText='Sign up'
      btnLoginText='Or Log in'
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      secondaryBtnText='or Log In'
      onSecondaryBtnClick={handleLoginClick}
      isSubmitDisabled={!isFormValid}
    >
      <label htmlFor='email' className=' modal__label'>
        Email*
        <input
          type='text'
          className='modal__input'
          id='email'
          placeholder='Email'
          name='email'
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='password' className='modal__label'>
        Password*
        <input
          type='password'
          className='modal__input'
          id='password'
          placeholder='Password'
          name='password'
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='name' className='modal__label'>
        Name*
        <input
          type='text'
          className='modal__input'
          id='registername'
          placeholder='Name'
          name='name'
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='imageUrl' className='modal__label'>
        Avatar URL*
        <input
          type='url'
          className='modal__input'
          id='avatarUrl'
          placeholder='Avatar Url'
          name='avatarUrl'
          value={values.avatarUrl}
          onChange={handleChange}
        />
      </label>
      {/* <div className='modal__button_container'>
        <button type='submit' className='modal__add_submit'>
          Sign up
        </button>
        <button
          type='submit'
          className='modal__login_submit '
          onClick={handleLoginClick}
        >
          Or Log in
        </button>
      </div> */}
    </ModalWithForm>
  );
}
export default RegisterModal;
