import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CountryCard.module.css';

const CountryCard = ({ country }) => {
  console.log("Datos del país: ", country);  // Esto imprimirá los datos del país en la consola
  
  if (!country.id) {
    return null;
  } else {
    
    return (
      <Link to={`/detail/${country.id}`} className={styles.link}>
        <div className={styles.countryCard}>
          <img src={country.flagImage} alt={`${country.name}'s flag`} className={styles.flagImage}/>
          <div className={styles.countryInfo}>
            <h2 className={styles.countryName}>{country.name}</h2>
            <p className={styles.countryContinent}>{country.continent}</p>
            <p className={styles.countryPopulation}>Population: {country.population}</p>
          </div>
        </div>
      </Link>
    );
  }

}

export default CountryCard;
