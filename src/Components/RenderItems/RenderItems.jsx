import React from 'react';
// // import { toast } from 'react-toastify';
// import { getOrders, updateStatus } from "../../api/orders";

// import { AdminItem } from '../AdminItem/AdminItem';

import styles from './RenderItems.module.css';
import { Button } from '../Button/Button';

export function RenderItems({
    sectionTitle,
    listToBeRendered,
    fetchItems,
    addItem
}) {



    return (
        <section className={styles.list_items}>
            <h2 className={styles.section_title}>{sectionTitle}</h2>
            <div>
                <Button
                    id="list-button"
                    type="button"
                    value="list-item"
                    className={styles.section_btn}
                    data-testid="list-button"
                    onClick={fetchItems}
                >
                    list all
                </Button>
                <Button
                    id="add-button"
                    type="button"
                    value="add-item"
                    className={styles.section_btn}
                    data-testid="add-button"
                    onClick={addItem}
                >
                    add new
                </Button>
            </div>
            <ul className={styles.wrap_items}>
                {listToBeRendered}
            </ul>
        </section>
    );
}
