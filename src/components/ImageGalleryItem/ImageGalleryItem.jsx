import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ image, onMaximize }) {
  const { id, webformatURL, largeImageURL, tags } = image;
  return (
    <li className={s.galleryItem}>
      <img
        className={s.image}
        id={id}
        src={webformatURL}
        alt={tags}
        onClick={onMaximize}
        data-large={largeImageURL}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }).isRequired,
  onMaximize: PropTypes.func.isRequired,
};
