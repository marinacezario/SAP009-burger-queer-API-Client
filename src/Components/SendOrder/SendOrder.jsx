import React, { useState } from "react";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

import styles from "./SendOrder.module.css"

export function SendOrder ({renderSelectedProducts}){

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
            <>
                <div className={styles.description}>
                    <p>qty</p>
                    <p>product</p>
                    <p>R$</p>
                </div>
                
                {renderSelectedProducts()}
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
    )
}

// receber do pai uma props que vai trazer o array de itens
// pode ser uma função que mapeia o array e tranforma em estrutura
{/* <Button />
<p>3</p>
<Button />

<p>{product.name}</p>
<p>{product.price}</p> */}