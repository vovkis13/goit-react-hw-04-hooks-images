import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export default function Modal({ imageURL, forAlt, closeModal }) {
  const handleKeyDown = e => e.code === 'Escape' && closeModal();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className={s.overlay} onClick={closeModal}>
      <div className={s.modal}>
        <img className={s.image} src={imageURL} alt={'large ' + forAlt} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  forAlt: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};
