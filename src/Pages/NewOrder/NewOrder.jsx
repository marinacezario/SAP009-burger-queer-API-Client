import React, { useState } from 'react';

import { Header } from '../../Components/Header/Header';
import { Menu } from "../../Components/Menu/Menu";
import { SendOrder } from '../../Components/SendOrder/SendOrder';

import styles from "./NewOrder.module.css"
import { Button } from '../../Components/Button/Button';
import { handleSendOrder } from '../../api/orders';

export function NewOrder (){
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

//criar a função handleSelectedProducts
  const handleSelectedProducts = (product) => {
    product.quantity = 1
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

  const handleQuantity = (product, children) => {

    const getIndex = selectedProducts.findIndex((item) => item.id === product.id);
    const updatedOrder = [...selectedProducts]

    if (children === '-') {
      if (product.quantity <= 1) {
        updatedOrder.splice(getIndex, 1);

        setSelectedProducts(updatedOrder)
      } else {
        const specificProduct = updatedOrder[getIndex];
        const decrement = specificProduct.quantity - 1;

        updatedOrder[getIndex].quantity = decrement;
        setSelectedProducts(updatedOrder)
        setQuantity(decrement)
      }
    }

    if (children === '+') {
      const specificProduct = updatedOrder[getIndex];
        const increment = specificProduct.quantity + 1;

        updatedOrder[getIndex].quantity = increment;
        setSelectedProducts(updatedOrder)
        setQuantity(increment)
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
            onClick={() => handleQuantity(product, '-')}
          >
            -
          </Button>
          {product.quantity}
          <Button
            id="increment-button"
            type="button"
            value="increment-button"
            className={styles.quantity_btn}
            data-testid="increment-button"
            onClick={() => handleQuantity(product, '+')}
          >
            +
          </Button>
        </div>
        
        <p>{product.name}</p>
        <p>{product.price * product.quantity}</p>

      </div>
    ));
  }

  const renderOrderTotal = () => {
    let total = 0
    selectedProducts.forEach((product) => {
      total += product.price * product.quantity
    })

    return total
  }

  const handleSendOrder = (e) => {
    e.preventDefault();
    
    console.log("client name", name)
};

    return (
        <>
        <Header showButton />
        <div className={styles.new_order}>
          <Menu handleSelectedProducts = {handleSelectedProducts}/>
          <SendOrder renderSelectedProducts={renderSelectedProducts} renderOrderTotal={renderOrderTotal} handleSendOrder={handleSendOrder}/>
        </div>
        </>
    )
}
