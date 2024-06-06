import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ItemCard from '../ItemCard/ItemCard';
import ItemModal from '../ItemModal/ItemModal';
import Main from '../Main/Main';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import WeatherCard from '../WeatherCard/WeatherCard';

function App() {
  return (
    <>
      <h1 className='app'>Hello, world!</h1>
      <Footer />
      <Header />
      <ItemCard />
      <ItemModal />
      <Main />
      <ModalWithForm />
      <WeatherCard />
    </>
  );
}

export default App;
