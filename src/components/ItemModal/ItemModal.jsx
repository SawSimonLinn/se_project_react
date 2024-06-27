import './ItemModal.css';
import closeIcon from '../../assets/close-icon.png';

const ItemModal = ({ activeModal, onClose, card }) => {
  return (
    <div
      className={`modal ${activeModal === 'preview-garment' && 'modal_opened'}`}
    >
      <div className='modal__content modal__content_type-img'>
        <button type='button' onClick={onClose}>
          <img
            src={closeIcon}
            alt='Close'
            draggable='false'
            className='modal__close-btn'
          />
        </button>
        <img src={card.link} alt={card.name} className='modal__img' />
        <div className='modal__footer'>
          <h2 className='modal__text'>{card.name}</h2>
          <p className='modal__weather'>Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
