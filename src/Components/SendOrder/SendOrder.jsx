import React, { useState } from "react";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

import styles from "./SendOrder.module.css"

export function SendOrder({ renderSelectedProducts, renderOrderTotal, handleSendOrder }) {

    const [name, setName] = useState("");

    return (
        <form
            className={styles.order_form}
        >
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
                onClick={handleSendOrder()}
            >
                send order
            </Button>
        </form>
    )
}

// receber do pai uma props que vai trazer o array de itens
// pode ser uma função que mapeia o array e tranforma em estrutura
{/* <Button />
<p>3</p>
<Button />

<p>{product.name}</p>
<p>{product.price}</p> */}