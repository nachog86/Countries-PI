import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Detail.module.css';

import { getCountryById } from '../../redux/actions/countriesActions';

const CountryDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector(state => state.countries.selectedCountry);

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  if (!country) {
    return <div className={styles.loading}>Cargando detalles del país...</div>;
  }
else {

  return (
    <div className={styles.container}>
      <Link to="/home" className={styles.backLink}>Volver al inicio</Link>
      <h1 className={styles.title}>{country.name}</h1>
      <img className={styles.flag} src={country.flagImage} alt={`Bandera de ${country.name}`} />
      <p className={styles.detail}>Continente: {country.continent}</p>
      <p className={styles.detail}>Capital: {country.capital}</p>
      <p className={styles.detail}>Subregión: {country.subregion}</p>
      <p className={styles.detail}>Área: {country.area}</p>
      <p className={styles.detail}>Población: {country.population}</p>
    </div>
  );
}
};

export default CountryDetailPage;







