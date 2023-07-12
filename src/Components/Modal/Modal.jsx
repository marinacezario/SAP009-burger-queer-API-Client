import React, { useState } from "react";
import ReactModal from "react-modal";

import styles from "./Modal.module.css";
import { Button } from "../Button/Button";

//PAREI DE MEXER PORQUE NÃO ESTÁ FICANDO FLEXÍVEL PARA PRODUCTS E USERS
//PRECISO VER SE FAÇO 4 CONDICIONAIS RELACIONADAS À PROPS
//OU SE DÁ PRA DEIXAR O EDITMODE E O DELETEMODE MAIS GENÉRICOS 

export function Modal(
    accessibilityLabel,
    modalTitle,
    editMode,
    editFields,
    handleSaveBtn,
    deleteMode,
    deleteFields,
    handleConfirmDeteleBtn
    ) {
    ReactModal.setAppElement('#root');
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <ReactModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel={accessibilityLabel}
            overlayClassName={styles.modal_overlay}
            className={styles.modal_content}
        >
          {editMode && (
            <>
                <h1>{modalTitle}</h1>
                {editFields}
                <div>
                    <Button
                        id="cancel-button"
                        type="button"
                        value="cancel"
                        className={styles.modal_btn}
                        data-testid="cancel-button"
                        onClick={closeModal}
                    >
                        cancel
                    </Button>
                    <Button
                        id="save-button"
                        type="submit"
                        value="save"
                        className={styles.modal_btn}
                        data-testid="save-button"
                        onClick={handleSaveBtn}
                    >
                        save
                    </Button>
                </div>
            </>
          )} 
          {deleteMode && (
            <>
                <h1>{modalTitle}</h1>
                {deleteFields}
                <div>
                <Button
                    id="confirm-delete-button"
                    type="submit"
                    value="confirm-delete"
                    className={styles.modal_btn}
                    data-testid="confirm-delete-button"
                    onClick={handleConfirmDeteleBtn}
                >
                    yes
                </Button>
                <Button
                    id="cancel-delete-button"
                    type="button"
                    value="cancel-delete"
                    className={styles.modal_btn}
                    data-testid="cancel-delete-button"
                    onClick={closeModal}
                >
                    no
                </Button>
                </div>
            </>
          )}  
        </ReactModal>
    )
}

                // <Input 
                //     id="email-input"
                //     type="email"
                //     placeholder="Email"
                //     value={email}
                //     onChange={(event) => setEmail(event.target.value)}
                //     data-testid="email-input"
                //     className={styles.inputs}
                // />
                // <Input
                //     id="password-input"
                //     type="password"
                //     placeholder="Password"
                //     value={password}
                //     onChange={(event) => setPassword(event.target.value)}
                //     data-testid="password-input"
                //     className={styles.inputs}
                // />
                // <div>
                //     <p>Role:</p>
                //     <select name="select-role" id="select-role">
                //         <option value="admin">admin</option>
                //         <option value="kitchen">kitchen</option>
                //         <option value="waiter">waiter</option>
                //     </select>
                // </div>