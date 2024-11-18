import './ModalWithForm.css';
import closeIcon from '../../assets/close-icon.png';

const ModalWithForm = ({
  children,
  btnText,
  title,
  isOpen,
  onClose,
  onSubmit,
  onSecondaryBtnClick,
  secondaryBtnText,
  isSubmitDisabled,
}) => {
  return (
    <div className={`modal ${isOpen ? 'modal_opened' : ''}`}>
      <div className='modal__content'>
        <h2 className='modal__title'>{title}</h2>
        <button type='button' onClick={onClose} className='modal__close-btn'>
          <img src={closeIcon} alt='Close' draggable='false' />
        </button>
        <form className='modal__form' onSubmit={onSubmit}>
          {children}
          <div className='button__container'>
            <button
              type='submit'
              className='modal__submit-btn'
              disabled={isSubmitDisabled}
            >
              {btnText}
            </button>
            <button
              type='button'
              className='modal__secondary-btn'
              onClick={onSecondaryBtnClick}
            >
              {secondaryBtnText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
