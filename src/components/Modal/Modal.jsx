import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => e.code === 'Escape' && this.props.closeModal();

  render() {
    const { imageURL, closeModal } = this.props;
    return (
      <div className={s.overlay} onClick={closeModal}>
        <div className={s.modal}>
          <img className={s.image} src={imageURL} alt="" />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
