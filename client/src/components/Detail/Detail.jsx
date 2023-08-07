import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Detail.module.css';

import { getCountryById } from '../../redux/actions/countriesActions';

const CountryDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const country = useSelector(state => state.countries.selectedCountry);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  const goBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from);
    } else {
      navigate('/home');
    }
  };

  if (!country) {
    return <div className={styles.loading}>Cargando detalles del país...</div>;
  } else {
    return (
      <div className={styles.container}>
        <button className={styles.button} onClick={goBack}>
          Volver
        </button>
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












