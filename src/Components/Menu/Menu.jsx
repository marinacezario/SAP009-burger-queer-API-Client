import { React, useState } from "react";

//components
import { Button } from "../../Components/Button/Button";

//styles
import styles from "./Menu.module.css";

export function Menu() {
    const [activeButton, setActiveButton] = useState(null);
    const [products, setProducts] = useState('');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
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
        onClick={() => handleButtonClick("breakfast")}
      />
      <Button
        id="diner-button"
        type="button"
        text="diner"
        value="diner"
        className={styles.menu_btn}
        data-testid="diner-button"
        onClick={() => handleButtonClick("diner")}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}
