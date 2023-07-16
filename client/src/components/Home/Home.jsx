import React from 'react';
import SearchBar from './SearchBar';
import FilterButtons from './FilterButtons';
import styles from './Home.module.css';

// Importar la imagen
import backgroundImage from '../../assets/61755.jpg';

const Home = () => {
  return (
    <div className={styles.home}>
      <img className={styles.backgroundImage} src={backgroundImage} alt="Background" />

      <div className={styles.overlay}>
        <h1 className={styles.title}>Epic Earth: Descubre, explora y vive</h1>
        <h2 className={styles.subtitle}>
          Tu guía interactiva para explorar el mundo. Empieza tu aventura
          seleccionando un continente, buscando tu país favorito o eligiendo una actividad.
        </h2>
      </div>

      <FilterButtons />
      <SearchBar />
    </div>
  );
};

export default Home;







  


