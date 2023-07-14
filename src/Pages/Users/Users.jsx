import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUsers, deleteUser, editUser, createNewUser } from "../../api/users";

import { Header } from "../../Components/Header/Header";
import { RenderItems } from "../../Components/RenderItems/RenderItems";
import { Input } from "../../Components/Input/Input";
import { Modal } from "../../Components/Modal/Modal";
import { AdminItem } from "../../Components/AdminItem/AdminItem";

import styles from "./Users.module.css";

export function Users() {
  const [listUsers, setListUsers] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [renderItemsUpdated, setRenderItemsUpdated] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [renderItemsUpdated]);

  const fetchUsers = () => {
    getUsers()
      .then((response) => {
        const userData = response.data;
        setListUsers(userData);
        setRenderItemsUpdated(true);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  const createUserConfirmation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast.error("Please, insert an email!");
      throw new Error("Please, insert an email!");
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      throw new Error("Please enter a valid email address.");
    }

    if (!password) {
      toast.error("Please enter a password.");
      throw new Error("Please enter a password.");
    } else if (password.length < 6) {
      toast.error("Password should have at least 6 characters.");
      throw new Error("Password should have at least 6 characters.");
    }

    //talvez precise de return boolean
    if (role === "") {
      toast.error("Please select a role.");
      throw new Error("Please select a role.");
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    createUserConfirmation();

    try {
      const userCreated = await createNewUser(email, password, role);
      if (userCreated.status === 201) {
        toast.success("Employee Added!");
        setEmail("");
        setPassword("");
        setRole("");
        fetchUsers();
        setRenderItemsUpdated(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    setEmail(user.email);
    setPassword(user.password);
    setRole(user.role);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleEdit = async (
    e,
    uid,
    updatedEmail,
    updatedPassword,
    updatedRole
  ) => {
    e.preventDefault();
    createUserConfirmation();

    try {
      const updateUser = await editUser(
        uid,
        updatedEmail,
        updatedPassword,
        updatedRole
      );

      if (updateUser.status === 200) {
        toast.success("Employee Data Updated!");
        fetchUsers();
        closeEditModal();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async (e, uid) => {
    e.preventDefault();
    try {
      const userDeleted = await deleteUser(uid);

      if (userDeleted.status === 200) {
        toast.success("Employee Deleted!");
        fetchUsers();
        closeDeleteModal();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Header showButton />
      {renderItemsUpdated && (
        <RenderItems
          sectionTitle="EMPLOYEES"
          listToBeRendered={listUsers.map((user) => (
            <li key={user.id}>
              <AdminItem
                user
                userEmail={user.email}
                userRole={user.role}
                handleEdit={() => openEditModal(user)}
                handleDelete={() => openDeleteModal(user)}
              />
            </li>
          ))}
          user
          email={email}
          password={password}
          role={role}
          onInputChange={(event) => setEmail(event.target.value)}
          onPasswordChange={(event) => setPassword(event.target.value)}
          onSelectChange={(option) => setRole(option.target.value)}
          handleCreateItem={(e) => handleCreateUser(e)}
        />
      )}
      <Modal
        modalTitle="EDIT EMPLOYEE"
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        editMode
        editFields={
          <>
            <Input
              id="email-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              data-testid="email-input"
              className={styles.inputs}
            />
            <Input
              id="password-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              data-testid="password-input"
              className={styles.inputs}
            />
            <div>
              <label>Role:</label>
              <select
                name="select-role"
                id="select-role"
                value={selectedUser.role}
                onChange={(option) => setRole(option.target.value)}
              >
                <option value="">select</option>
                <option value="admin">admin</option>
                <option value="kitchen">kitchen</option>
                <option value="waiter">waiter</option>
              </select>
            </div>
          </>
        }
        handleSaveBtn={(e) =>
          handleEdit(e, selectedUser.id, email, password, role)
        }Breakfast
      />

      <Modal
        modalTitle="DELETE EMPLOYEE?"
        isOpen={isDeleteModalOpen}
        closeModal={closeDeleteModal}
        deleteMode
        deleteFields={<>{selectedUser.email}</>}
        handleConfirmDeteleBtn={(e) => handleDelete(e, selectedUser.id)}
      />
    </>
  );
}
