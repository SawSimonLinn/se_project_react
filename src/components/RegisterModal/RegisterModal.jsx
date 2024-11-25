import React, { useEffect, useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function RegisterModal({ isOpen, onClose, onSignup, onClick, btnText }) {
  const [values, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    avatarUrl: '',
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({ email: '', password: '', name: '', avatarUrl: '' });
    }
  }, [isOpen]);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    Promise.resolve(onSignup(values))
      .then(() => {
        setFormData({ email: '', password: '', name: '', avatarUrl: '' });
        onClose();
      })
      .catch(console.error);
  };

  const isFormValid =
    values.email && values.password && values.name && values.avatarUrl;

  return (
    <ModalWithForm
      title='Sign up'
      btnText={btnText}
      btnLoginText='Or Log in'
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      secondaryBtnText='or Log In'
      onSecondaryBtnClick={onClick}
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
          autoComplete='email'
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
          autoComplete='current-password'
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
          autoComplete='name'
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
          autoComplete='url'
        />
      </label>
    </ModalWithForm>
  );
}
export default RegisterModal;
