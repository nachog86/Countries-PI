import React from 'react';
import { Link } from 'react-router-dom';
import PathRoutes from '../../utils/pathRoutes';
import styles from './Landing.module.css';

function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.backgroundImage}>
        <h1>Epic Earth: Descubre, explora y vive</h1>
        <Link to={PathRoutes.HOME_PAGE}>
          <button>Ingresar</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;

