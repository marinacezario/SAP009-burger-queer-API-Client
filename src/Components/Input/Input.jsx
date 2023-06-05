import React from 'react';
import styles from './Input.module.css';

export function Input({type, value, onChange, placeholder, className}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.inputs}
    />
  );
}
