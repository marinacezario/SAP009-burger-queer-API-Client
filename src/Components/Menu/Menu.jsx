import { React, useState } from "react";
import { handleShowMenu } from "../../api/products";

//components
import { Button } from "../../Components/Button/Button";

//styles
import styles from "./Menu.module.css";

export function Menu({handleSelectedProducts}) {
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
    <div className={styles.menu}>
      <div className={styles.menu_options}>
        <Button
          id="breakfast-button"
          type="button"
          value="breakfast"
          className={styles.menu_btn}
          data-testid="breakfast-button"
          onClick={() => handleButtonClick("Breakfast")}
        >
          breakfast
        </Button>
        <Button
          id="diner-button"
          type="button"
          value="diner"
          className={styles.menu_btn}
          data-testid="diner-button"
          onClick={() => handleButtonClick("Diner")}
        >
          diner
        </Button>
      </div>
      
      <ul className={styles.menu_list}>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <button
              className={styles.menu_products}
              onClick={() => handleSelectedProducts(product)} //clickHandler é props e deve ser passado no pai 
            >
              {product.name} <br></br> R${product.price}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
