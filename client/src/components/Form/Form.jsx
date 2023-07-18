import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createActivity } from '../../redux/actions/activitiesActions';
import { getAllCountries } from '../../redux/actions/countriesActions';
import Spinner from './spinner';
import styles from './Form.module.css';

const ActivityForm = () => {
  const dispatch = useDispatch();
  const paises = useSelector(state => state.countries);

  const [activityData, setActivityData] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: []
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const handleInputChange = (event) => {
    setActivityData({
      ...activityData,
      [event.target.name]: event.target.value
    });
  };

  const handleCountriesChange = (event) => {
    const selectedCountries = Array.from(event.target.selectedOptions, option => option.value);
    setActivityData({
      ...activityData,
      countries: selectedCountries
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if(activityData.name.length < 2) {
      alert("El nombre debe tener al menos dos caracteres");
    } else if(isNaN(activityData.duration)) {
      alert("La duración debe ser un número");
    } else if(activityData.difficulty === '') {
      alert("Debe seleccionar una dificultad");
    } else {
      setLoading(true);
      setError(null);
      try {
        await dispatch(createActivity(activityData));
        alert('Actividad creada con éxito');
        setActivityData({ name: '', difficulty: '', duration: '', season: '', countries: [] });
      } catch (err) {
        setError('Ha ocurrido un error al crear la actividad');
      }
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      {loading && <Spinner />}
      {error && <div className={styles.error}>{error}</div>}
      <input className={styles.input} type="text" name="name" value={activityData.name} onChange={handleInputChange} placeholder="Nombre" required />
      <select className={styles.select} name="difficulty" value={activityData.difficulty} onChange={handleInputChange} required>
        <option value="">Dificultad</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input className={styles.input} type="text" name="duration" value={activityData.duration} onChange={handleInputChange} placeholder="Duración" required />
      <select className={styles.select} name="season" value={activityData.season} onChange={handleInputChange} required>
        <option value="">Temporada</option>
        <option value="spring">Primavera</option>
        <option value="summer">Verano</option>
        <option value="autumn">Otoño</option>
        <option value="winter">Invierno</option>
      </select>
      <select className={styles.select} name="countries" multiple={true} value={activityData.countries} onChange={handleCountriesChange} required>
        {paises.map(el => <option key={el.id} value={el.id}>{el.name}</option>)}
        {console.log(paises)};
      </select>
      <button className={styles.button} type="submit">Crear Actividad</button>
    </form>
  );
};

export default ActivityForm;


