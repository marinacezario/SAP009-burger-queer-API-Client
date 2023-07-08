import React from "react";

import { Button } from "../Button/Button";

import styles from "./Order.module.css";

export function Order({
  clientName,
  date,
  products,
  titleBtn,
  status,
  borderColor,
  onStatusChange,
  }) {

    let setBorderColor = '';

    if (borderColor === 'pink') {
      setBorderColor = styles.pink_border
    }
    
    if (borderColor === 'blue') {
      setBorderColor = styles.blue_border
    }

    if (borderColor === 'yellow') {
      setBorderColor = styles.yellow_border
    }

  return (
    <div className={`${styles.order} ${setBorderColor}`}>
      <div className={styles.info}>
        <h2>Client: {clientName}</h2>
        <p>Entry: {date} </p>
      </div>

      <h1>Order</h1>

      <ul className={styles.products}>{products}</ul>

      <Button
        id="ready-button"
        type="button"
        value={status}
        className={styles.order_btn}
        data-testid="submit-button"
        onClick={() => onStatusChange(status)}
      >
        {titleBtn}
      </Button>
    </div>
  );
}
