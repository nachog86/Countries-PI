import React from 'react';

import styles from '../Home/CountryCard.module.css';

const CountryCard = ({ country }) => {
    return (
      <div className={styles['country-card']}>
        <img className={styles['country-flag']} src={country.flagImage} alt={country.name} />
        <h2 className={styles['country-name']}>{country.name}</h2>
        <p className={styles['country-continent']}>{country.continent}</p>
      </div>
    );
  };
  
  export default CountryCard;