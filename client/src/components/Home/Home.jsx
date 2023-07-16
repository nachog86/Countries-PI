import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import FilterButtons from './FilterButtons';
import SortButton from './SortButton';
import styles from './Home.module.css';
import { getAllCountries, getCountriesByName } from '../../services/api';
import CountriesList from './CountriesPage';
import Pagination from './Pagination';
import imageSource from '../../assets/61766.jpg';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const countriesPerPage = 10;

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAllCountries();
      setCountries(data);
      setFilteredCountries(data);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (search) {
      const fetchCountries = async () => {
        const data = await getCountriesByName(search);
        setCountries(data);
        setCurrentPage(1);
      };

      fetchCountries();
    }
  }, [search]);

  useEffect(() => {
    if (sortConfig.key) {
      const sortedCountries = [...filteredCountries].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
      setFilteredCountries(sortedCountries);
    }
  }, [sortConfig, filteredCountries]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.home}>
      <img className={styles.backgroundImage} src={imageSource} alt="Fondo" />
      <div className={styles.overlay}></div>
      <div className={styles.topControls}>
        <FilterButtons countries={countries} setFilteredCountries={setFilteredCountries} />
        <SearchBar handleSearch={handleSearch} />
        <SortButton sortConfig={sortConfig} setSortConfig={setSortConfig} />
      </div>
      <div className={styles.content}>
        <CountriesList countries={currentCountries} />
        <Pagination totalPages={Math.ceil(countries.length / countriesPerPage)} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default Home;









  


