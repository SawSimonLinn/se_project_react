import './App.css';

// React
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Components
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import AddItemModal from '../AddItemModal/AddItemModal';
import ItemModal from '../ItemModal/ItemModal';
import Profile from '../Profile/Profile';
import RegisterModal from '../RegisterModal/RegisterModal';
import LogInModal from '../LoginModal/LoginModal.jsx';
import EditProfileModal from '../EditProfileModal/EditPriofileModal';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';

// Contexts
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';

// utils
import { signup, signin } from '../../utils/auth';
import { getWeather, filterWeatherData } from '../../utils/weatherApi';
import { coordinates, APIkey } from '../../utils/constants';
import {
  getItems,
  addItem,
  deleteItemById,
  getCurrentUser,
  updateUser,
  likeCard,
} from '../../utils/api';

function App() {
  // State
  const navigate = useNavigate();
  const [weatherData, setWeatherData] = useState({
    type: '',
    temp: { F: '', C: '0' },
    city: '',
  });

  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
    avatar: '',
    _id: '',
  });

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [selectedGarment, setSelectedGarment] = useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState('');

  // Functions
  const closeActiveModal = () => {
    setActiveModal('');
  };

  const handleCardClick = card => {
    setActiveModal('preview-garment');
    setSelectedGarment(card);
  };

  const handleAddClick = () => {
    setActiveModal('add-garment');
  };

  const handleSignupClick = () => {
    setActiveModal('sign-up');
  };

  const handleLogInClick = () => {
    setActiveModal('log-in');
  };

  const handleProfileChangeClick = () => {
    setActiveModal('change-data');
  };

  const openDeleteConfirmModal = card => {
    setActiveModal('delete-garment');
    setSelectedGarment(card);
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === 'F' ? 'C' : 'F');
  };

  const handleAddItemModalSubmit = values => {
    const token = localStorage.getItem('jwt');
    setIsLoading(true);
    return addItem(values, token)
      .then(item => {
        setClothingItems([item, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleDeleteCard = card => {
    const token = localStorage.getItem('jwt');
    const id = card._id;

    return deleteItemById(id, token)
      .then(() => {
        setClothingItems(prevItems =>
          prevItems.filter(item => item._id !== id)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleCardLike = (itemId, isLiked) => {
    const token = localStorage.getItem('jwt');

    likeCard(itemId, isLiked, token)
      .then(updatedItem => {
        setClothingItems(prevItems =>
          prevItems.map(item => (item._id === itemId ? updatedItem : item))
        );
      })
      .catch(console.error);
  };

  const handleUpdateUserInfo = formData => {
    const token = localStorage.getItem('jwt');
    updateUser({ avatar: formData.imageUrl, name: formData.name }, token)
      .then(data => {
        setCurrentUser(data.data);
        closeActiveModal();
      })
      .catch(err => {
        console.error(err);
        alert(`${err}. Failed to update profile`);
      });
  };

  const handleRegisterModalSubmit = ({ name, email, password, avatarUrl }) => {
    const token = localStorage.getItem('jwt');
    setIsLoading(true);
    signup({ name, avatarUrl, email, password }, token)
      .then(() => {
        handleSignin({ name, avatarUrl, email, password });
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch(error => {
        console.error(error, 'Failed to sign up');
        alert('Failed to sign up');
      })
      .finally(() => setIsLoading(false));
  };

  const handleSignin = ({ email, password }) => {
    setIsLoading(true);
    signin(email, password)
      .then(res => {
        localStorage.setItem('jwt', res.token);
        getCurrentUser(res.token).then(userData => {
          setIsLoggedIn(true);
          setCurrentUser(userData);
          navigate('/profile');
          closeActiveModal();
        });
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleLogOut = () => {
    localStorage.removeItem('jwt');
    navigate('/');
    setIsLoggedIn(false);
  };

  // useEffect starts here
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

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      return;
    }
    getCurrentUser(jwt)
      .then(userData => {
        setIsLoggedIn(true);
        setCurrentUser(userData);
      })
      .catch(console.error);
  }, [isLoggedIn]);

  // return starts here
  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{
            currentTemperatureUnit,
            handleToggleSwitchChange,
          }}
        >
          <div className='page__content'>
            <Header
              handleAddClick={handleAddClick}
              handleLoginClick={handleLogInClick}
              handleSignupClick={handleSignupClick}
              handleProfileChangeClick={handleProfileChangeClick}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
            />

            <Routes>
              <Route
                path='/'
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                    isAuthenticated={isLoggedIn}
                  />
                }
              />
              <Route
                path='/profile'
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      handleAddClick={handleAddClick}
                      handleProfileChangeClick={handleProfileChangeClick}
                      handleLogOut={handleLogOut}
                      handleCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      onCardLike={handleCardLike}
                      isAuthenticated={isLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>

            <Footer />
          </div>

          <AddItemModal
            isOpen={activeModal === 'add-garment'}
            onClose={closeActiveModal}
            onAddItem={handleAddItemModalSubmit}
            btnText={isLoading ? 'Saving...' : 'Add garment'}
          />

          <RegisterModal
            isOpen={activeModal === 'sign-up'}
            onClose={closeActiveModal}
            onSignup={handleRegisterModalSubmit}
            handleLoginClick={handleLogInClick}
            btnText={isLoading ? 'Saving...' : 'Sign up'}
          />

          <LogInModal
            isOpen={activeModal === 'log-in'}
            onClose={closeActiveModal}
            onLogin={handleSignin}
            handleSignupClick={handleSignupClick}
            btnText={isLoading ? 'Loggin' : 'Log In'}
          />

          <EditProfileModal
            isOpen={activeModal === 'change-data'}
            onClose={closeActiveModal}
            onSaveChanges={handleUpdateUserInfo}
          />

          <DeleteConfirmModal
            isOpen={activeModal === 'delete-garment'}
            onClose={closeActiveModal}
            onDelete={handleDeleteCard}
            card={selectedGarment}
          />

          <ItemModal
            activeModal={activeModal}
            card={selectedGarment}
            onClose={closeActiveModal}
            handleDeleteCard={handleDeleteCard}
            openDeleteConfirmModal={openDeleteConfirmModal}
          />
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
