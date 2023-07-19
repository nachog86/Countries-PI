import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Detail.module.css';



import { getCountryById } from '../../redux/actions/countriesActions';

const CountryDetailPage = () => {
  const [country, setCountry] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await getCountryById(id);
        setCountry(response);
      } catch (error) {
        console.error('Hubo un error al obtener los detalles del país: ', error);
      }
    };

    fetchCountry();
  }, [id]);

  if (!country) {
    return <div className={styles.loading}>Cargando detalles del país...</div>;
  }

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
};

export default CountryDetailPage;







