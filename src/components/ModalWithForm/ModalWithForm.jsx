import './ModalWithForm.css';
import closeIcon from '../../assets/close-icon.png';

const ModalWithForm = ({ children, btnText, title, activeModal, onClose }) => {
  return (
    <div
      className={`modal ${activeModal === 'add-garment' && 'modal__opened'}`}
    >
      <div className='modal__content'>
        <h2 className='modal__title'>{title}</h2>
        <button type='button' onClick={onClose} className='modal__close-btn'>
          <img src={closeIcon} alt='Close' />
        </button>
        <form className='modal__form'>
          {children}
          <button type='submit' className='modal__submit-btn'>
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
