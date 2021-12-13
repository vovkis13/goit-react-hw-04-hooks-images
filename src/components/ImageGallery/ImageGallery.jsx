import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ collection, onMaximize }) {
  return (
    <ul className={s.imageGallery}>
      {collection.map(item => (
        <ImageGalleryItem key={item.id} image={item} onMaximize={onMaximize} />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  collection: PropTypes.array.isRequired,
  onMaximize: PropTypes.func.isRequired,
};