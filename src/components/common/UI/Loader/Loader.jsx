// src/components/common/UI/Loader/Loader.jsx

import React from 'react'
import style from './Loader.module.css';

function Loader() {
  return (
    <div className={style.spinner} role="status" aria-live="polite" aria-busy="true" aria-label="Loading">
      {[...Array(10)].map((_, i) => (
        <div key={i}></div>
      ))}
      <span className={style.visuallyHidden}>Loading...</span>
    </div>
  );
}

export default Loader;