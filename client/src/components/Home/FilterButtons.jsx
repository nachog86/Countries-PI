import React from 'react';
import style from './FilterButtons.module.css';



const FilterButtons = () => {
  return (
    <nav className={style.navbar}>
      <button className={style.button}>África</button>
      <button className={style.button}>América</button>
      <button className={style.button}>Asia</button>
      <button className={style.button}>Europa</button>
      <button className={style.button}>Oceanía</button>
    </nav>
  );
};

export default FilterButtons;

