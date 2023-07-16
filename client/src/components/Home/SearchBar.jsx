import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(inputValue);
  };

  return (
    <div className={styles.searchBar}>
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Buscar países..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className={styles.button} type="submit">Buscar</button>
    </form>
        </div>
  );
};

export default SearchBar;

