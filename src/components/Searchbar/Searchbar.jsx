import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.props.onSubmit}>
          <button className={s.button} type="submit">
            <MdSearch />
          </button>
          <input
            className={s.input}
            name="query"
            value={this.state.query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

