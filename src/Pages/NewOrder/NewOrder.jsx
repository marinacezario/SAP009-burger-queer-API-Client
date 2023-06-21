import React, { useState } from 'react';

import { Header } from '../../Components/Header/Header';
import { Menu } from "../../Components/Menu/Menu";
import { SendOrder } from '../../Components/SendOrder/SendOrder';

import styles from "./NewOrder.module.css"
import { Button } from '../../Components/Button/Button';

export function NewOrder (){
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

//criar a função handleSelectedProducts
  const handleSelectedProducts = (product) => {
    product.qtd = 1
    console.log(product);

    // Verificar se o item já está no array
    if (!selectedProducts.some((selectedProduct) => selectedProduct.id === product.id)) {
      setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product]);
    } else {
      console.log('produto já está no cardápio');
      console.log(product)
    }

    console.log(selectedProducts);
    return selectedProducts;
  };

  const handleIncrement = (product) => {
    return product.qtd++
  }

  const handleDecrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);

    if (quantity === 0){
      setSelectedProducts((prevSelectedProducts) => {
        // Remove o produto do array selectedProducts
        const updatedProducts = prevSelectedProducts.filter(
          (product) => product.id !== selectedProducts.id
        );
        return updatedProducts;
      })
    }
  }

//criar função de renderizar produtos selecionados renderSelectedProducts
  const renderSelectedProducts = () => {
    return selectedProducts.map((product) => (
      <div key={product.id} className={styles.products_container}>
        
        <div className={styles.product_quantity}>
          <Button
            id="decrement-button"
            type="button"
            value="decrement-button"
            className={styles.quantity_btn}
            data-testid="decrement-button"
            onClick={handleDecrement}
          >
            -
          </Button>
          {quantity}
          <Button
            id="increment-button"
            type="button"
            value="increment-button"
            className={styles.quantity_btn}
            data-testid="increment-button"
            onClick={handleIncrement}
          >
            +
          </Button>
        </div>
        
        <p>{product.name}</p>
        <p>{product.price}</p>

      </div>
    ));
  }

    return (
        <>
        <Header showButton />
        <div className={styles.new_order}>
          <Menu handleSelectedProducts = {handleSelectedProducts}/>
          <SendOrder renderSelectedProducts={renderSelectedProducts}/>
        </div>
        </>
    )
}
