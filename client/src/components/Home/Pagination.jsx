import React, { useState } from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ totalCountries, countriesPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalCountries / countriesPerPage);

  const handleClick = (newCurrentPage) => {
    if (newCurrentPage < 1 || newCurrentPage > totalPages) {
      return;
    }
    setCurrentPage(newCurrentPage);
    onPageChange(newCurrentPage); // llama a onPageChange cuando cambias de página
  };

  const handlePreviousClick = () => {
    handleClick(currentPage - 1);
  };

  const handleNextClick = () => {
    handleClick(currentPage + 1);
  };

  return (
    <div className={styles.pagination}>
      <span
        className={`${styles.pageItem} ${currentPage === 1 ? styles.disabled : ''}`}
        onClick={handlePreviousClick}
      >
        Previous
      </span>
      {Array.from({ length: totalPages }, (_, index) => (
        <span
          key={index}
          className={`${styles.pageItem} ${currentPage === index + 1 ? styles.active : ''}`}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </span>
      ))}
      <span
        className={`${styles.pageItem} ${currentPage === totalPages ? styles.disabled : ''}`}
        onClick={handleNextClick}
      >
        Next
      </span>
    </div>
  );
};

export default Pagination;

