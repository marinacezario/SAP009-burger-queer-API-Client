import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getUsers, deleteUser, editUser } from '../../api/users';


import { Header } from '../../Components/Header/Header';
import { RenderItems } from '../../Components/RenderItems/RenderItems';
import { Input } from '../../Components/Input/Input';
import { Modal } from '../../Components/Modal/Modal';
import { AdminItem } from '../../Components/AdminItem/AdminItem';

import styles from './Users.module.css';

export function Users() {

    const [listUsers, setListUsers] = useState([])
    const [isModalOpen, setIsModalOpen] = useState({isOpen: false, type:""});
    const [selectedUser, setSelectedUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('')

    // useEffect(() => {
    //     fetchUsers();
    // }, [listUsers]);

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

    const openModal = (user, type) => {

        setSelectedUser(user)
        setIsModalOpen({isOpen:true, type:type});
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleEdit = async (e, uid, updatedEmail, updatedPassword, updatedRole) => {

        e.preventDefault()

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!updatedEmail) {
            toast.error('Please, insert an email!')
            throw new Error('Please, insert an email!')
        } else if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address.")
            throw new Error("Please enter a valid email address.")
        }

        if (!updatedPassword) {
            toast.error("Please enter a password.")
            throw new Error("Please enter a password.")
        } else if (updatedPassword.length < 6) {
            toast.error("Password should have at least 6 characters.")
            throw new Error("Password should have at least 6 characters.")
        }

        try {
            const updateUser = await editUser(uid, updatedEmail, updatedPassword, updatedRole)

            if (updateUser.status === 200) {

                toast.success('Employee Data Updated!')
                fetchUsers();
                closeModal();

            }
        } catch (error) {
            toast.error(error.message)
        }
    };

    const handleDelete = async (e, uid) => {
        e.preventDefault()
        try {
            const userDeleted = await deleteUser(uid)

            if (userDeleted.status === 200) {
                toast.success('Employee Deleted!')
                fetchUsers();
                closeModal();
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <>
            <Header showButton />
            <RenderItems
                sectionTitle="EMPLOYEES"
                listToBeRendered={
                    listUsers.map((user) => (
                        <li key={user.id}>
                            <AdminItem
                                user
                                userEmail={user.email}
                                userRole={user.role}
                                handleEdit={() => openModal(user, 'edit')}
                                handleDelete={() => openModal(user, 'delete')}
                            />

                        </li>
                    ))
                }
                fetchItems={() => fetchUsers()}
            // addItem
            />
            <Modal
                modalTitle="EDIT EMPLOYEE"
                isOpen={isModalOpen.isOpen}
                editMode={isModalOpen.type === "edit"}
                editFields={
                    <>
                        <Input
                            id="email-input"
                            type="email"
                            placeholder="Email"
                            value={selectedUser.email}
                            onChange={(event) => setEmail(event.target.value)}
                            data-testid="email-input"
                            className={styles.inputs}
                        />
                        <Input
                            id="password-input"
                            type="password"
                            placeholder="Password"
                            value={selectedUser.password}
                            onChange={(event) => setPassword(event.target.value)}
                            data-testid="password-input"
                            className={styles.inputs}
                        />
                        <div>
                            <label>Role:</label>
                            <select name="select-role" id="select-role" value={selectedUser.role} onChange={option => setRole(option.target.value)}>
                                <option value="">select</option>
                                <option value="admin">admin</option>
                                <option value="kitchen">kitchen</option>
                                <option value="waiter">waiter</option>
                            </select>
                        </div>
                    </>
                }
                handleSaveBtn={() => handleEdit(selectedUser.id, email, password, role)}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />

            <Modal
                modalTitle="DELETE EMPLOYEE ?"
                isOpen={isModalOpen.isOpen}
                deleteMode={isModalOpen.type === "delete"}
                deleteFields={
                    <>
                        {selectedUser.email}
                    </>
                }
                handleConfirmDeteleBtn={() => handleDelete(selectedUser.id)}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </>
    )
}