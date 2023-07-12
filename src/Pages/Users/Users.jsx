import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getUsers, deleteUser, editUser } from '../../api/users';


import { Header } from '../../Components/Header/Header';
import { RenderItems } from '../../Components/RenderItems/RenderItems';
import { Input } from '../../Components/Input/Input';

import styles from './Users.module.css';
import { Modal } from '../../Components/Modal/Modal';
import { RenderItems } from '../../Components/RenderItems/RenderItems';
import { AdminItem } from '../../Components/AdminItem/AdminItem';

export function Users (){ 

    const [listUsers, setListUsers] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState({userEmail});
    const [password, setPassword] = useState(userPassword);
    const [role, setRole] = useState('')

    useEffect(() => {
        fetchUsers();
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

    const handleEdit = async (uid, updatedEmail, updatedPassword, updatedRole) => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!updatedEmail) {
            toast.error('Please, insert an email!')
            throw new Error('Please, insert an email!')
          }else if (!emailRegex.test(email)) {
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
                setIsModalOpen(false);
                
            }
        } catch (error) {
            toast.error(error.message)
        }        
    };

    const handleDelete = async (uid) => {
        try {
            const deleteUser = await deleteUser(uid)

            if (deleteUser.status === 200) {
                toast.success('Employee Deleted!')
                fetchUsers();
                setIsModalOpen(false);
            }
        } catch (error) {
            toast.error(error.message)
        }
    } */
    return(
        <>
            <Header showButton/>
            <RenderItems 
                sectionTitle="EMPLOYEES"
                listToBeRendered={
                    listUsers.map((user) => (
                        <>
                            <AdminItem 
                                key={user.id}
                                user
                                userEmail={user.email}
                                userRole={user.role}
                                handleEdit={() => setIsModalOpen(true)}
                                handleDelete={() => setIsModalOpen(true)}
                            />
                            <Modal
                                accessibilityLabel="EDIT EMPLOYEE"
                                modalTitle="EDIT EMPLOYEE"
                                editMode={true}
                                editFields={
                                    <>
                                        <Input 
                                            id="email-input"
                                            type="email"
                                            placeholder="Email"
                                            value={user.email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            data-testid="email-input"
                                            className={styles.inputs}
                                        />
                                        <Input
                                            id="password-input"
                                            type="password"
                                            placeholder="Password"
                                            value={user.password}
                                            onChange={(event) => setPassword(event.target.value)}
                                            data-testid="password-input"
                                            className={styles.inputs}
                                        />
                                        <div>
                                            <label>Role:</label>
                                            <select name="select-role" id="select-role">
                                                <option value="">select</option>
                                                <option value="admin">admin</option>
                                                <option value="kitchen">kitchen</option>
                                                <option value="waiter">waiter</option>
                                            </select>
                                        </div>
                                    </>
                                }
                                handleSaveBtn={handleEdit(user.id, email, password, updatedRole)}
                                isModalOpen={isModalOpen}
                                setIsModalOpen={setIsModalOpen}
                            />

                            <Modal
                                accessibilityLabel="DELETE EMPLOYEE"
                                modalTitle="DELETE EMPLOYEE ?"
                                deleteMode={true}
                                deleteFields={
                                    <>
                                        {email}
                                    </>
                                }
                                handleConfirmDeteleBtn={handleDelete}
                                isModalOpen={isModalOpen}
                                setIsModalOpen={setIsModalOpen}
                            />
                        </>
                        
                        
                    ))
                }
            />
            
        </>
    )
}