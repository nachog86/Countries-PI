import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { getCountriesByName } from '../../redux/actions/countriesActions';
const SearchBar = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState('');
  
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCountriesByName(inputValue));
    // handleSearch(inputValue);
  };

  return (
    <div className={styles.navbar}>
      <form className={styles.searchBar} onSubmit={(event) => handleSubmit(event)}>
        <input 
          className={styles.searchInput}
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

