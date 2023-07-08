import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getOrders, updateStatus } from "../../api/orders";

import { Header } from '../../Components/Header/Header';
import { Order } from '../../Components/Order/Order';

import styles from './Kitchen.module.css';

export function Kitchen (){

    const [pendingOrders, setPendingOrder] = useState([])
    const [preparing, setPreparing] = useState([])

    useEffect(() => {
        fetchOrders();
      }, []);
    
    useEffect(() => {
    fetchOrders();
    }, [pendingOrders, preparing]);

    const fetchOrders = () => {
    getOrders()
        .then((response) => {
        const ordersData = response.data;
        const pending = ordersData.filter((order) => order.status === 'pending');
        const preparing = ordersData.filter((order) => order.status === 'preparing');
        setPendingOrder(pending);
        setPreparing(preparing);
        })
        .catch((error) => {
        console.error('Error fetching orders:', error);
        });
    };

    const handleStatusChange = async (orderId, changeStatus) => {
        try {
            const statusUpdated = await updateStatus(orderId, changeStatus)

            if (statusUpdated.status === 200) {

                if ( changeStatus === 'preparing') {
                    toast.success('Preparing...')
                } else if ( changeStatus === 'ready') {
                    toast.success('Sent to waiter!')
                }

                fetchOrders();
                
            }
        } catch (error) {
            toast.error(error.message)
        }        
    };

    return (
        <>
            <Header />
            <div className={styles.orders}>
                <section className={styles.pending_orders}>
                    <h2>PENDING ORDERS</h2>
                        {pendingOrders.map((order) => (
                            <Order
                                className={styles.order_component}
                                key={order.id} 
                                clientName={order.client} 
                                date={order.dateEntry} 
                                products={order.products.map((product) => (
                                    <li key={product.product.id} className={styles.product}>
                                        <p className={styles.product_p}>{product.qty}</p>
                                        <p className={styles.product_p}>{product.product.name}</p>
                                    </li>
                                ))}
                                status={order.status}
                                borderColor="pink"
                                titleBtn="prepare"
                                onStatusChange={() => handleStatusChange(order.id, "preparing")
                                }
                            />
                        ))}
                </section>

                <section className={styles.preparing}>
                    <h2 className={styles.section_title}>PREPARING</h2>
                        {preparing.map((order) => (
                            <Order
                                key={order.id} 
                                clientName={order.client} 
                                date={order.dateEntry} 
                                products={order.products.map((product) => (
                                    <li key={product.product.id}>
                                        <p>{product.qty}</p>
                                        <p>{product.product.name}</p>
                                    </li>
                                ))}
                                status={order.status}
                                borderColor="blue"
                                titleBtn="ready"
                                onStatusChange={() => handleStatusChange(order.id, "ready")
                                }
                            />
                        ))}
                </section>
            </div>
            
        </>
    );
}
