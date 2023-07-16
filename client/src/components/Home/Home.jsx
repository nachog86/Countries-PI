import React from 'react';
import SearchBar from './SearchBar';
import FilterButtons from './FilterButtons';
import styles from './Home.module.css';

// Importar el archivo de video
import videoSource from '../../assets/images/videoHome.mp4';

const Home = () => {
  return (
    <div className={styles.home}>
      <video className={styles.backgroundVideo} autoPlay="autoplay" loop="loop" muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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






  

