import React from 'react';

import { Button } from '../Button/Button';

import styles from './Order.module.css'

export function Order ({clientName, date, products, titleBtn}){
    return (
        <div>
            <div>
                <h2>Client: {clientName}</h2>
                <p>Entry: {date} </p>
            </div>

            <h1>Order</h1>

            <div>
                {products}
            </div>
           
            <Button
                id="ready-button"
                type="button"
                value="ready"
                className={styles.ready_btn}
                data-testid="submit-button"
            >
                {titleBtn}
            </Button>
        </div>
    )
}