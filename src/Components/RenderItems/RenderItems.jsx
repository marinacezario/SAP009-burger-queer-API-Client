import React, { useState } from "react";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

import styles from "./RenderItems.module.css";

export function RenderItems({
  sectionTitle,
  listToBeRendered,
  user,
  email,
  password,
  role,
  name,
  price,
  type,
  product,
  onInputChange,
  onPasswordChange,
  onPriceChange,
  onSelectChange,
  handleCreateItem,
}) {
  const [showListAll, setShowListAll] = useState(true);
  const [showAddNew, setShowAddNew] = useState(false);
  const [preparationTimes, setPreparationTimes] = useState({});

  const handleListAll = () => {
    setShowListAll(true);
    setShowAddNew(false);
  };

  const handleAddNew = () => {
    setShowListAll(false);
    setShowAddNew(true);
  };

  return (
    <section className={styles.list_items}>
      <div className={styles.render_options}>
        <Button
          id="list-button"
          type="button"
          value="list-item"
          className={styles.section_btn}
          data-testid="list-button"
          onClick={handleListAll}
        >
          list all
        </Button>
        <Button
          id="add-button"
          type="button"
          value="add-item"
          className={styles.section_btn}
          data-testid="add-button"
          onClick={handleAddNew}
        >
          add new
        </Button>
      </div>
      {showListAll && (
        <>
          <h2 className={styles.section_title}>{sectionTitle}</h2>
          <ul className={styles.wrap_items}>{listToBeRendered}</ul>
        </>
      )}
      {showAddNew && (
        <div className={styles.add_new}>
          {user && (
            <>
              <h2 className={styles.section_title}>NEW EMPLOYEE</h2>
              <div className={styles.form}>
                <Input
                  id="email-input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={onInputChange}
                  data-testid="email-input"
                  className={styles.inputs}
                />
                <Input
                  id="password-input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={onPasswordChange}
                  data-testid="password-input"
                  className={styles.inputs}
                />
                <div className={styles.select_area}>
                  <label>Role:</label>
                  <select
                    className={styles.select}
                    name="select-role"
                    id="select-role"
                    value={role}
                    onChange={onSelectChange}
                  >
                    <option value="">select</option>
                    <option value="admin">admin</option>
                    <option value="kitchen">kitchen</option>
                    <option value="waiter">waiter</option>
                  </select>
                </div>
              </div>
            </>
          )}
          {product && (
            <>
              <h2 className={styles.section_title}>NEW PRODUCT</h2>
              <div className={styles.form}>
                <Input
                  id="name-input"
                  type="text"
                  placeholder="Product name"
                  value={name}
                  onChange={onInputChange}
                  data-testid="name-input"
                  className={styles.inputs}
                />
                <Input
                  id="price-input"
                  type="text"
                  inputmode="decimal"
                  placeholder="Price"
                  value={price}
                  onChange={onPriceChange}
                  data-testid="price-input"
                  className={styles.inputs}
                />
                <div className={styles.select_area}>
                  <label>Type:</label>
                  <select
                    className={styles.select}
                    name="select-type"
                    id="select-type"
                    value={type}
                    onChange={onSelectChange}
                  >
                    <option value="">select</option>
                    <option value="breakfast">breakfast</option>
                    <option value="diner">diner</option>
                  </select>
                </div>
              </div>
            </>
          )}
          <Button
            id="save-button"
            type="submit"
            value="save-item"
            className={styles.section_btn}
            data-testid="save-button"
            onClick={handleCreateItem}
          >
            save
          </Button>
        </div>
      )}
    </section>
  );
}
