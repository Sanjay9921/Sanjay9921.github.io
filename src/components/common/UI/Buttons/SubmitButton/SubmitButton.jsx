// src/components/common/UI/Buttons/SubmitButton/SubmitButton.jsx

import React from 'react'
import style from './SubmitButton.module.css';

function SubmitButton({ width, height, icon, children, color, backgroundColor, ariaLabel }) {
  return (
    <button
      type="submit"
      className={style["submit-button"]}
      style={{ width, height, backgroundColor, color }}
      aria-label={ariaLabel || children}
    >
      {icon && <span className={style.icon}>{icon}</span>}
      {children}
    </button>
  );
}

export default SubmitButton;