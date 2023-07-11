import React, { useEffect, useState } from 'react';
// // import { toast } from 'react-toastify';
// import { getOrders, updateStatus } from "../../api/orders";

import { AdminItem } from '../AdminItem/AdminItem';

import styles from './RenderOrders.module.css';

export function RenderItems ({
    sectionTitle,
    listToBeRendered,
    changeStatusTo
}){

    

    return (
        <section className={styles.list_items}>
            <h2 className={styles.section_title}>{sectionTitle}</h2>
            <div className={styles.wrap_items}>
                {listToBeRendered === 'users' && listUsers.map((user) => (
                    <AdminItem 
                        key={user.id}
                        user
                        userEmail={user.email}
                        userRole={user.role}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                ))}
                {listToBeRendered === 'products' && listProducts.map((product) => (
                    <AdminItem 
                    key={product.id}
                    product
                    productName={product.name}
                    productPrice={product.price}
                    productType={product.type}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
                ))}
            </div>
        </section>
    );
}
