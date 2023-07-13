import React from "react";

import { Button } from "../Button/Button";

import styles from "./AdminItem.module.css";

export function AdminItem({
  user,
  userEmail,
  userRole,
  product,
  productName,
  productPrice,
  productType,
  handleEdit,
  handleDelete
}) {

  return (
    <div className={styles.item}>

      {user && (
        <div className={styles.info}>
          <h2>Email: {userEmail}</h2>
          <h2>Role: {userRole}</h2>
        </div>
      )}
      {product && (
        <div className={styles.info}>
          <h2>Name: {productName}</h2>
          <h2>Price: {productPrice}</h2>
          <h2>Type: {productType}</h2>
        </div>
      )}

      <div className={styles.action_btn}>
        <Button
          id="edit-button"
          type="button"
          value="edit-item"
          className={styles.item_btn}
          data-testid="edit-button"
          onClick={handleEdit}
        >
          edit
        </Button>

        <Button
          id="delete-button"
          type="button"
          value="delete-item"
          className={styles.item_btn}
          data-testid="delete-button"
          onClick={handleDelete}
        >
          delete
        </Button>
      </div>
    </div>
  );
}
