import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import handleSubmit from './SearchBar';
import FilterButtons from './FilterButtons';
import SortButton from './SortButton';
import styles from './Home.module.css';
import { getAllCountries, getCountriesByName } from '../../redux/actions/countriesActions';
import CountriesList from './CountriesPage';
import Pagination from './Pagination';
import imageSource from '../../assets/61755.jpg';
import { Link } from 'react-router-dom';
import PathRoutes from '../../utils/pathRoutes';


const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries.countries)||[];
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const countriesPerPage = 10;

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
     
      dispatch(getCountriesByName());
      setFilteredCountries(countries);
      setCurrentPage(1);
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

  // const handleSearch = (searchValue) => {
  //   setSearch(searchValue);
  // };

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  // const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);
  const currentCountries = Array.isArray(countries) 
  ? countries.slice(indexOfFirstCountry, indexOfLastCountry) 
  :[countries];
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.home}>
      <img className={styles.backgroundImage} src={imageSource} alt="Fondo" />
      <div className={styles.overlay}></div>
      <div className={styles.topControls}>
        <Link to={PathRoutes.ACTIVITY_FORM_PAGE}> <button> Create Activities</button></Link>
        <FilterButtons countries={countries} setFilteredCountries={setFilteredCountries} />
        <SearchBar handleSubmit={handleSubmit} />
        <SortButton sortConfig={sortConfig} setSortConfig={setSortConfig} />
      </div>
      <div className={styles.content}>
        <CountriesList countries={currentCountries} />
        <Pagination totalPages={Math.ceil(filteredCountries.length / countriesPerPage)} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default Home;










  


