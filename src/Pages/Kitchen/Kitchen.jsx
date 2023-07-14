import React from "react";

import { Header } from "../../Components/Header/Header";

import styles from "./Kitchen.module.css";
import { RenderOrders } from "../../Components/RenderOrders/RenderOrders";

export function Kitchen() {
  return (
    <>
      <Header />
      <div className={styles.orders}>
        <RenderOrders
          sectionTitle="PENDING ORDERS"
          stateToBeRendered="pending"
          borderColor="pink"
          showButton={true}
          titleBtn="prepare"
          changeStatusTo="preparing"
        />

        <RenderOrders
          sectionTitle="PREPARING"
          stateToBeRendered="preparing"
          borderColor="blue"
          showButton={true}
          titleBtn="ready"
          changeStatusTo="ready"
        />
      </div>
    </>
  );
}
