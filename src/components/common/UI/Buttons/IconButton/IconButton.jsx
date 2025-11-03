// src/components/common/UI/Buttons/IconButton/IconButton.jsx

import React from 'react'
import style from './IconButton.module.css'

function IconButton({ width, height, icon, children, color, backgroundColor, link, ariaLabel }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={style.button}
      style={{ width, height, backgroundColor, color }}
      aria-label={ariaLabel || 'Icon Button'}
    >
      {children && <div className={style.text}>{children}</div>}
      <div className={style.icon}>{icon}</div>
    </a>
  );
}

export default IconButton;