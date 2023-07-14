import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

import { getItem } from "../../storage/localStorage";
import { createNewOrder } from "../../api/orders";

import styles from "./SendOrder.module.css";
import "react-toastify/dist/ReactToastify.css";

export function SendOrder({
  renderSelectedProducts,
  renderOrderTotal,
  orderResume,
}) {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSendOrder = async (e) => {
    e.preventDefault();

    const waiterId = getItem("userId");
    const clientName = name;

    if (clientName === "") {
      toast.error("Please, insert the name of the client");
      throw new Error("Missing client name");
    }

    if (orderResume.length <= 0) {
      toast.error("Please, choose at least 1 product");
      throw new Error("No product selected");
    }

    try {
      const orderSent = await createNewOrder(orderResume, clientName, waiterId);

      if (orderSent.status === 201) {
        toast.success("Sent to kitchen!");
        navigate("/current-orders");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form className={styles.order_form}>
      <Input
        type="text"
        placeholder="client name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        data-testid="client-name-input"
        className={styles.inputs}
      ></Input>
      <>
        <div className={styles.description}>
          <p className={styles.qty_p}>qty</p>
          <p className={styles.qty_p}>product</p>
          <p className={styles.qty_price}>R$</p>
        </div>

        {renderSelectedProducts()}

        <div className={styles.order_total}>
          <p className={styles.qty_p}>TOTAL</p>
          {renderOrderTotal()}
        </div>
      </>
      <Button
        id="submit-button"
        type="submit"
        value="send-order"
        className={styles.order_btn}
        data-testid="submit-button"
        onClick={handleSendOrder}
      >
        send order
      </Button>
    </form>
  );
}
