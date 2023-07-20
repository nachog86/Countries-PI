import React from 'react';
import styles from './SortButton.module.css';

const SortButton = ({ sortConfig, setSortConfig }) => {
  const handleSort = (key) => {
    setSortConfig(prevState => {
      if (prevState.key === key && prevState.direction === 'asc') {
        return { key, direction: 'desc' };
      }
      return { key, direction: 'asc' };
    });
  };

  return (
    <div className={styles.navbar}>
      <button className={styles.button} onClick={() => handleSort('name')}>Ordenar por nombre</button>
      <button className={styles.button} onClick={() => handleSort('population')}>Ordenar por población</button>
    </div>
  );
};

export default SortButton;




