import { React, useState } from "react";
import { handleShowMenu } from "../../api/products";

//components
import { Button } from "../../Components/Button/Button";

//styles
import styles from "./Menu.module.css";

export function Menu(clickHandler) {
  const [activeButton, setActiveButton] = useState(null);
  const [products, setProducts] = useState([]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    handleShowMenu()
      .then((response) => {
        // console.log(response.data)
        setProducts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  };

  const filteredProducts = products.filter((item) => item.type === activeButton);

  return (
    <>
      <Button
        id="breakfast-button"
        type="button"
        text="breakfast"
        value="breakfast"
        className={styles.menu_btn}
        data-testid="breakfast-button"
        onClick={() => handleButtonClick("Breakfast")}
      />
      <Button
        id="diner-button"
        type="button"
        text="diner"
        value="diner"
        className={styles.menu_btn}
        data-testid="diner-button"
        onClick={() => handleButtonClick("Diner")}
      />
      <ul className={styles.menu_list}>
        {filteredProducts.map((product) => (
          <li className={styles.menu_products} key={product.id}>
            <button
              className={styles.menu_products}
              onClick={clickHandler} //clickHandler é props e deve ser passado no pai 
            >
              {product.name} R${product.price}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
