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
    }, []);
   
    const handleStatusChange = (orderId, newStatus) => {
        //update the orders status with a new status
        const updatedOrder = pendingOrders.map((order) => {
            if (order.id === orderId) {
                return { ...order, status: newStatus};
            }
            return order;
        });
        setPendingOrder(updatedOrder);
    };

    return (
        <>
            <Header />
            <h1>Pending Orders</h1>
            <section>
                {pendingOrders.map((order) => (
                    <Order
                        key={order.id} 
                        clientName={order.client} 
                        date={order.dateEntry} 
                        products={order.products.map((product) => (
                            <li key={product.id}>
                                <p>{product.qty}</p>
                                <p>{product.name}</p>
                            </li>
                        ))}
                        status={order.status}
                        titleBtn={order.status === 'pending' ? 'preparing' : 'ready'}
                        onStatusChange={(newStatus) => handleStatusChange(order.id, newStatus)
                        }
                    />
                ))}
            </section>
        </>
    );
}
