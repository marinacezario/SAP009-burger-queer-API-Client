import React, { useEffect, useState } from 'react';
//import { toast } from 'react-toastify';
import { getUsers } from '../../api/users';

import { Header } from '../../Components/Header/Header';
import { RenderItems } from '../../Components/RenderItems/RenderItems';

//import styles from './Users.module.css';

export function Users (){ 

    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        fetchUsers();
      }, []);
    
    useEffect(() => {
        fetchUsers();
    }, [listUsers]);

    const fetchUsers = () => {
    getUsers()
        .then((response) => {
        const userData = response.data;
        setListUsers(userData);
        })
        .catch((error) => {
        console.error('Error fetching users:', error);
        });
    };

/*     const handleEdit = async (orderId, changeStatus) => {
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
    } */
    return(
        <>
            <Header showButton/>
            <h2>Users</h2>
            <RenderItems />
        </>
    )
}