// import React, { useEffect, useState } from 'react';
// import { getOrders } from "../../api/orders";

// import { Order } from '../../Components/Order/Order';

// export const KitchenOrders = ({ sectionTitle, newStatus, btnText }) => {

//     //acho que precisam ser arrays diferentes pra pending order e pra preparing
//     const [pendingOrders, setPendingOrder] = useState([])
//     const [preparing, setPreparing] = useState([])


//     //fazer um map????
//     //dois estados: pendingOrders e preparingOrders
//     //faz um map ou forEach na response(ordersData)
//     //pra cada order: 
//     //se order.status for igual a pending, faz um push daquela order pro array pendingOrders
//     //se for igual a preparing, faz push pra preparingOrders
//     useEffect(() => {
//         getOrders()
//         .then((response) => {
//             const ordersData = response.data

//             return ordersData.map((order) => {
//                 if (order.status === 'pending') {
//                     setPendingOrder([...pendingOrders, order])
//                 }

//                 if (order.status === 'preparing') {
//                     setPreparing([...preparing, order])
//                 }
//             })

//             // const ordersFilter = ordersData.filter((order) => order.status === orderStatus)
//             // console.log(ordersFilter)
//             // setPendingOrder(ordersFilter)
//         }) 
//     }, []);
   
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
