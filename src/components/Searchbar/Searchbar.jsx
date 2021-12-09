import { useState } from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.target.value);

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={onSubmit}>
        <button className={s.button} type="submit">
          <MdSearch />
        </button>
        <input
          className={s.input}
          name="query"
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
