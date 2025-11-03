// src/components/common/Form/InputField/InputField.jsx

import React from 'react';
import style from './InputField.module.css';

function InputField({ width, height, type, value, name, placeholder, label, onChange, id, required = true, disabled = false }) {
  const inputId = id || `input-${name}`;

  return (
    <div style={{ maxWidth: width }} className={style["input-field"]}>
      <label htmlFor={inputId}>
        {label}
      </label>
      <input 
        id={inputId}
        style={{ height }}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        disabled={disabled}
        aria-label={label}
      />
    </div>
  );
}

export default InputField;
