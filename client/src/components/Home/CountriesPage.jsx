import React, { useEffect, useState } from 'react';
import { getCountries } from '../../services/api';
import CountryCard from './CountryCard';
import FilterButtons from './FilterButtons';
import SortButtons from './SortButtons';
import Pagination from './Pagination';
import styles from './CountryPages.module.css';

const CountryPages = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(null);

  // Obtenemos los países cuando el componente se monta
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };

    fetchData();
  }, []);

  // Manejamos la funcionalidad del filtro
  const handleFilter = (filterValue) => {
    setFilter(filterValue);
  };

  // Manejamos la funcionalidad de ordenamiento
  const handleSort = (sortValue) => {
    setSort(sortValue);
  };

  // Aquí es donde aplicarías los filtros y el ordenamiento a tus países antes de renderizarlos
  const filteredCountries = filter ? countries.filter(country => country.region === filter) : countries;
  const sortedCountries = sort ? [...filteredCountries].sort((a, b) => a[sort] > b[sort] ? 1 : -1) : filteredCountries;

  return (
    <div className={styles.countryPages}>
      <FilterButtons handleFilter={handleFilter} />
      <SortButtons handleSort={handleSort} />
      <div className={styles.countryList}>
        {sortedCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
      <Pagination countries={sortedCountries} />
    </div>
  );
};

export default CountryPages;
