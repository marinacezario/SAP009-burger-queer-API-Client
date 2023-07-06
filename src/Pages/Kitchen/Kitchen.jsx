import React from 'react';

import { Header } from '../../Components/Header/Header';
import { KitchenOrders } from '../../Components/KitchenOrders/KitchenOrders';

export function Kitchen (){

    return (
        <>
            <Header />
            <KitchenOrders
                sectionTitle="Pending Orders"
                orderStatus="pending"
                btnText="prepare"
                newStatus="preparing"
            />
            <KitchenOrders
                sectionTitle="Preparing"
                orderStatus="preparing"
                btnText="ready"
                newStatus="ready"
            />
        </>
    );
}
