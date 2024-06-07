import './ModalWithForm.css';

const ModalWithForm = ({ children, btnText, title, activeModal }) => {
  return (
    <div
      className={`modal ${activeModal === 'add-garment' && 'modal--opened'}`}
    >
      <div className='modal__content'>
        <h2 className='modal__title'>{title}</h2>
        <button type='button' className='modal__close-btn'>
          X
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
