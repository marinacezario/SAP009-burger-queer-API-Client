import React from 'react';

import { Header } from '../../Components/Header/Header';
import { RenderOrders } from '../../Components/RenderOrders/RenderOrders';

import styles from './CurrentOrders.module.css';

export function CurrentOrders (){
    return (
        <>
            <Header showButton />
            <div className={styles.render_orders_waiter}>
                <RenderOrders 
                    sectionTitle="CURRENT ORDERS"
                    stateToBeRendered="ready"
                    borderColor="yellow"
                    showButton={true}
                    titleBtn="deliver"
                    changeStatusTo="delivered"
                />
                <div className={styles.orders}>
                    <RenderOrders 
                        sectionTitle="PENDING ORDERS"
                        stateToBeRendered="pending"
                        borderColor="pink"
                        showButton={false}
                    />
                    
                    <RenderOrders 
                        sectionTitle="PREPARING"
                        stateToBeRendered="preparing"
                        borderColor="blue"
                        showButton={false}
                    />
                </div>
            </div>
        </>
    )
}