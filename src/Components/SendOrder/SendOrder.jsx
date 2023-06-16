import React, { useState } from "react";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

import styles from "./SendOrder.module.css"

export function SendOrder (){

    const [name, setName] = useState("");
    const [showName, setShowName] = useState(false);
    // const [buttonText, setButtonText] = useState("ok");
    const [editMode, setEditMode] = useState(false);
    
    const handleSendOrder = (e) => {
        e.preventDefault();
        // setShowName(true);
        // setButtonText("edit");
        console.log("client name", name)
    };

    const handleName = () => {
        setShowName(true);
        setEditMode(false);
    }

    const handleEdit = () => {
        setShowName(false);
        setEditMode(true);
    }

    return (
        <form 
            className={styles.order_form}
            onSubmit={handleSendOrder}
        >
            <div className={styles.client_name}>
                {showName ? (
                    <>
                        <p className={styles.client_name_text}>{name}</p>
                        <Button
                            id="edit-button"
                            type="button"
                            value="edit-name"
                            className={styles.order_btn}
                            data-testid="edit-button"
                            onClick={handleEdit}
                        >
                            edit
                        </Button>
                    </> 
                ) : (
                   <div className={styles.client_name}>
                        <Input
                            type="text"
                            placeholder="client name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            data-testid="client-name-input"
                            className={styles.inputs}
                        />
                        <Button
                            id="submit-button"
                            type="submit"
                            value="save-name"
                            className={styles.order_btn}
                            data-testid="submit-button"
                            onClick={handleName}
                        >
                            ok
                        </Button>
                   </div> 
                )}
            </div>
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
    )
}

// preciso fazer com q esse ultimo botao seja o de 
//enviar o pedido e os outros só pra lidar com o
//nome do cliente.