import React, { useEffect, useState } from 'react';
import { getOrders } from "../../api/orders";

import { Order } from '../../Components/Order/Order';

export const KitchenOrders = ({ sectionTitle, orderStatus, newStatus, btnText }) => {

    const [pendingOrders, setPendingOrder] = useState([])

    useEffect(() => {
        getOrders()
        .then((response) => {
            const ordersData = response.data
            const ordersFilter = ordersData.filter((order) => order.status === orderStatus)
            console.log(ordersFilter)
            setPendingOrder(ordersFilter)
        }) 
    }, []);
   
    const handleStatusChange = (orderId, changeStatus) => {
        //update the orders status with a new status
        const updatedOrder = pendingOrders.map((order) => {
            if (order.id === orderId) {
                return { ...order, status: changeStatus};
            }
            return order;
        });
        setPendingOrder(updatedOrder);
    };

    return (
        <section>
            <h2>{sectionTitle}</h2>
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
                    titleBtn={btnText}
                    onStatusChange={() => handleStatusChange(order.id, newStatus)
                    }
                />
            ))}
        </section>
    );
}
