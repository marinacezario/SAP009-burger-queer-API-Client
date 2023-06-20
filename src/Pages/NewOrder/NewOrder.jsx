import React from 'react';

import { Header } from '../../Components/Header/Header';
import { Menu } from "../../Components/Menu/Menu";
import { SendOrder } from '../../Components/SendOrder/SendOrder';

import styles from "./NewOrder.module.css"

export function NewOrder (){
    return (
        <>
        <Header showButton />
        <div className={styles.new_order}>
          <Menu />
          <SendOrder />
        </div>
        </>
    )
}
