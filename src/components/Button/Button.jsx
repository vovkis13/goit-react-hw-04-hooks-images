import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import s from './Button.module.css';

export default function Button({ handleClick }) {
  return (
    <Link
      className={s.Link}
      activeClass="active"
      to="loadMoreButton"
      smooth={true}
      duration={500}
    >
      <button
        className={s.button}
        type="button"
        onClick={handleClick}
        id="loadMoreButton"
      >
        Load more
      </button>
    </Link>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};