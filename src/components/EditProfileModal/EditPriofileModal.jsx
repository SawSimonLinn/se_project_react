import React, { useState, useEffect, useContext } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function EditProfileModal({ isOpen, onClose, onSave }) {
  const currentUser = useContext(CurrentUserContext);

  const [user, setUser] = useState({ name: '', imageUrl: '' });
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setUser({
        name: currentUser.name,
        imageUrl: currentUser.avatar,
      });
    }
  }, [currentUser]);

  const handleChange = event => {
    const { name, value } = event.target;
    setUser(prevData => {
      const newUser = { ...prevData, [name]: value };
      setIsChanged(
        newUser.name !== currentUser.name ||
          newUser.imageUrl !== currentUser.avatar
      );
      return newUser;
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(user);
  };

  return (
    <ModalWithForm
      title='Change Profile Data'
      btnText='Save changes'
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isSubmitDisabled={!isChanged}
    >
      <label className='modal__label'>
        Name{''}
        <input
          type='text'
          className='modal__input'
          id='profile-name'
          placeholder='Name'
          name='name'
          value={user.name}
          onChange={handleChange}
        />
      </label>
      <label className='modal__label'>
        Avatar Url{''}
        <input
          type='text'
          className='modal__input'
          id='profile-imageUrl'
          placeholder='Avatar Url'
          name='imageUrl'
          value={user.imageUrl}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}
export default EditProfileModal;
