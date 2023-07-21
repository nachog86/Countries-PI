import React from 'react';
import styles from './SortButton.module.css';

const SortButton = ({ sortConfig, setSortConfig }) => {
  const handleSort = (key) => {
    console.log('handleSort llamado con:', key);
    setSortConfig(prevState => {
      const newSortConfig = (prevState.key === key && prevState.direction === 'asc')
        ? { key, direction: 'desc' }
        : { key, direction: 'asc' };
      console.log('newSortConfig:', newSortConfig);
      return newSortConfig;
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




