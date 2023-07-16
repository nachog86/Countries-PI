import React from 'react';
import { Link } from 'react-router-dom';
// import backgroundImage from '../../assets/61766.jpg';
import styles from './Landing.module.css';

function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.backgroundImage}>
        <h1>Epic Earth: Descubre, explora y vive</h1>
        <Link to="/home">
          <button>Ingresar</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;

