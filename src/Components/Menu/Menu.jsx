import { React } from "react";
import { handleShowMenu } from "../../api/products";

//components
import { Button } from "../../Components/Button/Button";

//styles
import styles from "./Menu.module.css";

export function Menu() {
    //const [activeButton, setActiveButton] = useState(null);
    //const [products, setProducts] = useState('');

    const handleButtonClick = () => {
        //setActiveButton(buttonName);
        
        handleShowMenu()
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    };

    //const filteredProducts = products.filter((item) => item.type === activeButton);


 
  return (
    <>
      <Button
        id="breakfast-button"
        type="button"
        text="breakfast"
        value="breakfast"
        className={styles.menu_btn}
        data-testid="breakfast-button"
        onClick={() => handleButtonClick()}
      />
      <Button
        id="diner-button"
        type="button"
        text="diner"
        value="diner"
        className={styles.menu_btn}
        data-testid="diner-button"
        onClick={() => handleButtonClick()}
      />
     {/*  <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul> */}
    </>
  );
}
