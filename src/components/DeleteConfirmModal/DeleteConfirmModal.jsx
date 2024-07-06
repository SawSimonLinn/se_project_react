import './DeleteConfirmModal.css';
import closeIcon from '../../assets/close-icon.png';
import useOutsideAlerter from '../../useOutsideAlerter/useOutsideAlerter';

const DeleteConfirmModal = ({ handleDeleteCard, onClose, isOpen, card }) => {
  const componentRef = useOutsideAlerter(onClose);

  return (
    <div className={`delete-modal ${isOpen ? 'delete-modal_opened' : ''}`}>
      <div className='delete-modal__content' ref={componentRef}>
        <button
          type='button'
          onClick={onClose}
          className='delete-modal__close-btn'
        >
          <img src={closeIcon} alt='Close' draggable='false' />
        </button>
        <h2 className='delete-modal__text'>
          Are you sure you want to delete this item? This action is
          irreversible.
        </h2>
        <button
          className='delete-modal__confirm-btn delete-modal__btn'
          onClick={() => {
            handleDeleteCard(card);
            onClose();
          }}
        >
          Yes, delete item
        </button>
        <button
          className='delete-modal__cancle-btn delete-modal__btn'
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
