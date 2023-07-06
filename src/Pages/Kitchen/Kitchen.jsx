import React, { useEffect, useState } from 'react';
import { getOrders } from "../../api/orders";

import { Header } from '../../Components/Header/Header';
import { Order } from '../../Components/Order/Order';
// import { KitchenOrders } from '../../Components/KitchenOrders/KitchenOrders';

export function Kitchen (){

    const [pendingOrders, setPendingOrder] = useState([])
    const [preparing, setPreparing] = useState([])

    useEffect(() => {
        getOrders()
        .then((response) => {
            const ordersData = response.data

            return ordersData.map((order) => {
                if (order.status === 'pending') {
                    setPendingOrder([...pendingOrders, order])
                }

                if (order.status === 'preparing') {
                    setPreparing([...preparing, order])
                }
            })
        }) 
    }, []);

    //preciso que essa funçao atenda tanto pendingOrder quanto preparing
    //fazer uma confirmação do order.status
    //se order.status for igual pending
    //mapear pendingOrder e fazer a mudança

    //mas se for igual a preparing
    //mapear preparing e fazer a mudança

    const handleStatusChange = (orderStatus, orderId, changeStatus) => {
        //update the orders status with a new status
        const updatedOrder = pendingOrders.map((order) => {
            if (order.id === orderId) {
                return { ...order, status: changeStatus};
            }
            return order;
        });
        setPendingOrder(updatedOrder);
        console.log('pendingOrder =', pendingOrders)

        return pendingOrders
        
    };

    return (
        <>
            <Header />
            <section>
                <h2>PENDING ORDERS</h2>
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
                            titleBtn="prepare"
                            onStatusChange={() => handleStatusChange(order.status, order.id, "preparing")
                            }
                        />
                    ))}
            </section>

            <section>
                <h2>PREPARING</h2>
                    {preparing.map((order) => (
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
                            titleBtn="ready"
                            onStatusChange={() => handleStatusChange(order.id, "ready")
                            }
                        />
                    ))}
            </section>
            {/* <KitchenOrders
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
            /> */}
        </>
    );
}



// import { Order } from '../../Components/Order/Order';

// export const KitchenOrders = ({ sectionTitle, newStatus, btnText }) => {

   
//     const handleStatusChange = (orderId, changeStatus) => {
//         //update the orders status with a new status
//         const updatedOrder = pendingOrders.map((order) => {
//             if (order.id === orderId) {
//                 return { ...order, status: changeStatus};
//             }
//             return order;
//         });
//         setPendingOrder(updatedOrder);
//         console.log('pendingOrder =', pendingOrders)
//         return pendingOrders
        
//     };

//     return (
//         <section>
//             <h2>{sectionTitle}</h2>
//             {pendingOrders.map((order) => (
//                 <Order
//                     key={order.id} 
//                     clientName={order.client} 
//                     date={order.dateEntry} 
//                     products={order.products.map((product) => (
//                         <li key={product.id}>
//                             <p>{product.qty}</p>
//                             <p>{product.name}</p>
//                         </li>
//                     ))}
//                     status={order.status}
//                     titleBtn={btnText}
//                     onStatusChange={() => handleStatusChange(order.id, newStatus)
//                     }
//                 />
//             ))}
//         </section>
//     );
// }
