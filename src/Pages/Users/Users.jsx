import React from 'react';

import { Header } from '../../Components/Header/Header';

//import styles from './Users.module.css';

export function Users (){ 

    const [listUsers, setListUsers] = useState([])
    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        fetchItems();
      }, []);
    
    useEffect(() => {
    fetchItems();
    }, [listUsers, listProducts]);

    const fetchItems = () => {
    getOrders()
        .then((response) => {
        const ordersData = response.data;
        const pending = ordersData.filter((order) => order.status === 'pending');
        const preparing = ordersData.filter((order) => order.status === 'preparing');
        const ready = ordersData.filter((order) => order.status === 'ready');
        setPendingOrder(pending);
        setPreparing(preparing);
        setReadyOrders(ready);
        })
        .catch((error) => {
        console.error('Error fetching orders:', error);
        });
    };

    const handleEdit = async (orderId, changeStatus) => {
        try {
            const statusUpdated = await updateStatus(orderId, changeStatus)

            if (statusUpdated.status === 200) {

                if ( changeStatus === 'preparing') {
                    toast.success('Preparing...')
                } else if ( changeStatus === 'ready') {
                    toast.success('Sent to waiter!')
                } else if ( changeStatus === 'delivered' ) {
                    toast.success('Order delivered!')
                }

                fetchOrders();
                
            }
        } catch (error) {
            toast.error(error.message)
        }        
    };

    const handleDelete = async () => {
        try {
            toast.success('FIX THIS TOAST!')
        } catch (error) {
            toast.error(error.message)
        }
    }
    return(
        <>
            <Header showButton/>
            <h2>Users</h2>
        </>
    )
}