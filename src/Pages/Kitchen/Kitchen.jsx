import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { Header } from "../../Components/Header/Header";

import styles from "./Kitchen.module.css";
import { RenderOrders } from "../../Components/RenderOrders/RenderOrders";

export function Kitchen() {

  const [preparationTimes] = useState({});

  useEffect(() => {
    for (const orderId in preparationTimes) {
      const preparationTime = preparationTimes[orderId];
      toast.info(`Preparation time for order ${orderId}: ${preparationTime} minutes`);
    }
  }, [preparationTimes]);
  

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
