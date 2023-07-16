import React from 'react';
import CountryCard from './CountryCard';
import styles from '../Home/CountriesPage.module.css';

const CountriesList = ({ countries }) => {
  return (
    <div className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;

