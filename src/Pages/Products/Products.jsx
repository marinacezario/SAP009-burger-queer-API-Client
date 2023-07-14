import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getProducts,
  deleteProduct,
  editProduct,
  createNewProducts,
} from "../../api/products";

import { Header } from "../../Components/Header/Header";
import { RenderItems } from "../../Components/RenderItems/RenderItems";
import { Input } from "../../Components/Input/Input";
import { Modal } from "../../Components/Modal/Modal";
import { AdminItem } from "../../Components/AdminItem/AdminItem";

import styles from "./Products.module.css";

export function Products() {
  const [listProducts, setlistProducts] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setselectedProduct] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [renderItemsUpdated, setRenderItemsUpdated] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    getProducts()
      .then((response) => {
        const productData = response.data;
        setlistProducts(productData);
        setRenderItemsUpdated(true);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const createProductConfirmation = () => {
    const numberRegex = /^\d+(\.\d{1,2})?$/

    if (name === "") {
      toast.error("Please, insert a name for the product!");
      throw new Error("Please, insert a name for the product!");
    }

    if (price === "") {
      toast.error("Please, enter a price.");
      throw new Error("Please, enter a price.");
    } else if (!numberRegex.test(price)) {
      toast.error("Please, enter only numbers.");
      throw new Error("Please, enter only numbers.");
    }

    if (type === "") {
      toast.error("Please, select a type.");
      throw new Error("Please, select a type.");
    }
  };

  const cleanState = () => {
    setName("");
    setPrice("");
    setType("");
  }

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    createProductConfirmation();

    try {
      const productCreated = await createNewProducts(name, price, type);
      if (productCreated.status === 201) {
        toast.success("Product Added!");
        cleanState();
        fetchProducts();
        setRenderItemsUpdated(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const openEditModal = (product) => {
    setselectedProduct(product);
    setName(product.name);
    setPrice(product.price);
    setType(product.type);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    cleanState();
  };

  const openDeleteModal = (product) => {
    setselectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    cleanState();
  };

  const handleEdit = async (
    e,
    productId,
    updatedName,
    updatedPrice,
    updatedType
  ) => {
    e.preventDefault();
    createProductConfirmation();

    try {
      const updateProduct = await editProduct(
        productId,
        updatedName,
        updatedPrice,
        updatedType
      );

      if (updateProduct.status === 200) {
        toast.success("Product Data Updated!");
        fetchProducts();
        closeEditModal();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async (e, productId) => {
    e.preventDefault();
    try {
      const productDeleted = await deleteProduct(productId);

      if (productDeleted.status === 200) {
        toast.success("Product Deleted!");
        fetchProducts();
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
          sectionTitle="PRODUCTS"
          listToBeRendered={listProducts.map((product) => (
            <li key={product.id}>
              <AdminItem
                product
                productName={product.name}
                productPrice={product.price}
                productType={product.type}
                handleEdit={() => openEditModal(product)}
                handleDelete={() => openDeleteModal(product)}
              />
            </li>
          ))}
          product
          name={name}
          price={price}
          type={type}
          onInputChange={(event) => setName(event.target.value)}
          onPriceChange={(event) => setPrice(event.target.value)}
          onSelectChange={(option) => setType(option.target.value)}
          handleCreateItem={(e) => handleCreateProduct(e)}
        />
      )}
      <Modal
        modalTitle="EDIT PRODUCT"
        isOpen={isEditModalOpen}
        closeModal={closeEditModal}
        editMode
        editFields={
          <>
            <Input
              id="name-input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              data-testid="name-input"
              className={styles.inputs}
            />
            <Input
              id="price-input"
              type="text"
              placeholder="Price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              data-testid="price-input"
              className={styles.inputs}
            />
            <div>
              <label>Type:</label>
              <select
                name="select-type"
                id="select-type"
                value={selectedProduct.type}
                onChange={(option) => setType(option.target.value)}
              >
                <option value="">select</option>
                <option value="breakfast">breakfast</option>
                <option value="diner">diner</option>
              </select>
            </div>
          </>
        }
        handleSaveBtn={(e) =>
          handleEdit(e, selectedProduct.id, name, price, type)
        }
      />

      <Modal
        modalTitle="DELETE PRODUCT?"
        isOpen={isDeleteModalOpen}
        closeModal={closeDeleteModal}
        deleteMode
        deleteFields={<>{selectedProduct.name}</>}
        handleConfirmDeteleBtn={(e) => handleDelete(e, selectedProduct.id)}
      />
    </>
  );
}
