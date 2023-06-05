import React from 'react';
import styles from './ErrorLabel.module.css';

export function ErrorLabel({ value }) {
  console.log(value);
  return (
    <label className={styles.error_label}>{value}</label>
  );
}
  