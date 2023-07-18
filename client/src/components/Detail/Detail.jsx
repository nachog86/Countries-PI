import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCountryById } from '../../services/api';
import styles from './Detail.module.css';

const CountryDetailPage = () => {
  const [country, setCountry] = useState(null);
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

  // Mientras los datos se están cargando, muestra un mensaje de "cargando..."
  if (!country) {
    return <div className={styles.loading}>Cargando detalles del país...</div>;
  }

  // Una vez que los datos se carguen, puedes mostrar los detalles del país
  return (
    <div className={styles.container}>
      <Link to="/home" className={styles.backLink}>Volver al inicio</Link> {/* Link para volver al inicio */}
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



