// src/components/common/Form/TextAreaField/TextAreaField.jsx

import React from 'react';
import style from './TextAreaField.module.css';

function TextAreaField({
  width,
  height,
  value,
  name,
  placeholder,
  label,
  onChange,
  id,
  required = true,
  disabled = false
}) {
  const textareaId = id || `textarea-${name}`;

  return (
    <div style={{ maxWidth: width }} className={style["text-area-field"]}>
      <label htmlFor={textareaId}>{label}</label>
      <textarea
        id={textareaId}
        style={{ height }}
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

export default TextAreaField;