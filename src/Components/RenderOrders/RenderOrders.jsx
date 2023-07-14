import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getOrders, updateStatus } from "../../api/orders";

import { Order } from "../../Components/Order/Order";

import styles from "./RenderOrders.module.css";

export function RenderOrders({
  sectionTitle,
  stateToBeRendered,
  borderColor,
  showButton,
  titleBtn,
  changeStatusTo,
}) {
  const [pendingOrders, setPendingOrder] = useState([]);
  const [preparing, setPreparing] = useState([]);
  const [readyOrders, setReadyOrders] = useState([]);
  const [preparationTimes, setPreparationTimes] = useState({});

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [pendingOrders, preparing, readyOrders]);

  const fetchOrders = () => {
    getOrders()
      .then((response) => {
        const ordersData = response.data;

        ordersData.sort((a, b) => new Date(a.dateEntry) - new Date(b.dateEntry));

        const pending = ordersData.filter(
          (order) => order.status === "pending"
        );
        const preparing = ordersData.filter(
          (order) => order.status === "preparing"
        );
        const ready = ordersData.filter(
          (order) => order.status === "ready"
        );
        setPendingOrder(pending);
        setPreparing(preparing);
        setReadyOrders(ready);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  };

  const handleStatusChange = async (orderId, changeStatus) => {
    try {
      const statusUpdated = await updateStatus(orderId, changeStatus);

      if (statusUpdated.status === 200) {
        if (changeStatus === "preparing") {
          toast.success("Preparing...");
        } else if (changeStatus === "ready") {
          const now = new Date();
          const entryTime = new Date(
            pendingOrders.find((order) => order.id === orderId).dateEntry
          );
          const preparationTime = Math.floor(
            (now - entryTime) / (1000 * 60) 
          );
  
          setPreparationTimes((prevTimes) => ({
            ...prevTimes,
            [orderId]: preparationTime,
          }));
          toast.success("Sent to waiter!");
        } else if (changeStatus === "delivered") {
          toast.success("Order delivered!");
        }

        fetchOrders();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className={styles.pending_orders}>
      <h2 className={styles.section_title}>{sectionTitle}</h2>
      <div className={styles.wrap_orders}>
        {stateToBeRendered === "pending" &&
          pendingOrders.map((order) => (
            <Order
              className={styles.order_component}
              key={order.id}
              clientName={order.client}
              date={order.dateEntry}
              products={order.products.map((product) => (
                <li key={product.product.id} className={styles.product}>
                  <p className={styles.product_p}>{product.qty}</p>
                  <p className={styles.product_p}>{product.product.name}</p>
                </li>
              ))}
              status={order.status}
              borderColor={borderColor}
              showButton={showButton}
              titleBtn={titleBtn}
              onStatusChange={() =>
                handleStatusChange(order.id, { changeStatusTo })
              }
              preparationTime={preparationTimes[order.id]} 
            />
          ))}
        {stateToBeRendered === "preparing" &&
          preparing.map((order) => (
            <Order
              className={styles.order_component}
              key={order.id}
              clientName={order.client}
              date={order.dateEntry}
              products={order.products.map((product) => (
                <li key={product.product.id} className={styles.product}>
                  <p className={styles.product_p}>{product.qty}</p>
                  <p className={styles.product_p}>{product.product.name}</p>
                </li>
              ))}
              status={order.status}
              borderColor={borderColor}
              showButton={showButton}
              titleBtn={titleBtn}
              onStatusChange={() =>
                handleStatusChange(order.id, { changeStatusTo })
              }
              preparationTime={preparationTimes[order.id]} 
            />
          ))}
        {stateToBeRendered === "ready" &&
          readyOrders.map((order) => (
            <Order
              className={styles.order_component}
              key={order.id}
              clientName={order.client}
              date={order.dateEntry}
              products={order.products.map((product) => (
                <li key={product.product.id} className={styles.product}>
                  <p className={styles.product_p}>{product.qty}</p>
                  <p className={styles.product_p}>{product.product.name}</p>
                </li>
              ))}
              status={order.status}
              borderColor={borderColor}
              showButton={showButton}
              titleBtn={titleBtn}
              onStatusChange={() =>
                handleStatusChange(order.id, { changeStatusTo })
              }
              preparationTime={preparationTimes[order.id]} 
            />
          ))}
      </div>
    </section>
  );
}
