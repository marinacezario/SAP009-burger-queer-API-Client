import React, { useEffect, useState } from 'react';
import { getOrders } from "../../api/orders";

import { Header } from '../../Components/Header/Header';
import { Order } from '../../Components/Order/Order';

export function Kitchen (){

    const [pendingOrders, setPendingOrder] = useState([])

    useEffect(() => {
        getOrders()
        .then((response) => {
            const ordersData = response.data
            setPendingOrder(ordersData.filter((order) => order.status === 'pending'))
        })
    }, [pendingOrders])
   

    return (
        <>
            <Header />
            <h1>Pending Orders</h1>
            <section>
                {pendingOrders.map((order) => (
                    <Order 
                        clientName={order.client} 
                        date={order.dateEntry} 
                        products={order.products.map((product) => (
                            <li>
                                <p>{product.qty}</p>
                                <p>{product.name}</p>
                            </li>
                        ))}
                        titleBtn=
                    />
                ))}
            </section>
        </>
    )
}