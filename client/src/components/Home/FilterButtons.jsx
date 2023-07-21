import React from 'react';
import style from './FilterButtons.module.css';

const FilterButtons = ({ setFilteredCountries, countries, activities }) => {

  const handleFilterByContinent = (continent) => {
    console.log('handleFilterByContinent llamado con:', continent);
    if (countries) { 
      const filtered = countries.filter(country => country.continent === continent);
      console.log('filtered:', filtered);
      setFilteredCountries(filtered);
      
    }
  };

  const handleFilterByActivity = (activityName) => {
    if (countries) { 
      const filtered = countries.filter(country => 
        country.activities.some(activity => activity.name === activityName)
      );
      setFilteredCountries(filtered);
    }
  };

  return (
    <nav className={style.navbar}>
      <button className={style.button} onClick={() => handleFilterByContinent('Africa')}>África</button>
      <button className={style.button} onClick={() => handleFilterByContinent('Americas')}>América</button>
      <button className={style.button} onClick={() => handleFilterByContinent('Asia')}>Asia</button>
      <button className={style.button} onClick={() => handleFilterByContinent('Europe')}>Europa</button>
      <button className={style.button} onClick={() => handleFilterByContinent('Oceania')}>Oceanía</button>

      {activities && activities.map((activity) => ( // También deberías verificar si 'activities' está definido antes de llamar 'map'
        <button 
          key={activity.id} 
          className={style.button} 
          onClick={() => handleFilterByActivity(activity.name)}
        >
          {activity.name}
        </button>
      ))}
    </nav>
  );
};

export default FilterButtons;

