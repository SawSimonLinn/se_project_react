import React, { useEffect } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { useForm } from '../../hooks/useForm';

function LogInModal({ isOpen, onClose, onLogin, onClick, btnText }) {
  const { values, handleChange, setValues } = useForm({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isOpen) {
      setValues({ email: '', password: '' });
    }
  }, [isOpen, setValues]);

  const handleSubmit = e => {
    e.preventDefault();
    Promise.resolve(onLogin(values))
      .then(() => {
        setValues({ email: '', password: '' });
        onClose();
      })
      .catch(console.error);
  };

  const isFormValid = values.email && values.password;

  return (
    <ModalWithForm
      title='Log In'
      btnText={btnText}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      secondaryBtnText='or Sign Up'
      onSecondaryBtnClick={onClick}
      isSubmitDisabled={!isFormValid}
    >
      <label htmlFor='login-email' className='modal__label'>
        Email
        <input
          type='text'
          className='modal__input'
          id='login-email'
          placeholder='Email'
          name='email'
          value={values.email}
          onChange={handleChange}
          autoComplete='email'
        />
      </label>
      <label htmlFor='login-password' className='modal__label'>
        Password
        <input
          type='password'
          className='modal__input'
          id='login-password'
          placeholder='Password'
          name='password'
          value={values.password}
          onChange={handleChange}
          autoComplete='current-password'
        />
      </label>
    </ModalWithForm>
  );
}

export default LogInModal;
