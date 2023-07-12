import React, { useEffect, useState } from 'react';
// // import { toast } from 'react-toastify';
// import { getOrders, updateStatus } from "../../api/orders";

import { AdminItem } from '../AdminItem/AdminItem';

// import styles from './RenderOrders.module.css';

export function RenderItems ({
    sectionTitle,
    listToBeRendered
}){

    

    return (
        <section className={styles.list_items}>
            <h2 className={styles.section_title}>{sectionTitle}</h2>
            <div className={styles.wrap_items}>
                {listToBeRendered}
            </div>
        </section>
    );
}
