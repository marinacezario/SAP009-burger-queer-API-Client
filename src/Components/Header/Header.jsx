import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from './Header.module.css';
import logo from '../../assets/img/logo-header.png';
import logoMobile from '../../assets/img/logo-header-mobile.png';
import { Button } from '../Button/Button';

const getNavigationDetails = (pathname) => {
  let text = "";
  let route = "";

  if (location.pathname === '/new-order' || location.pathname === '/current-orders') {
    text = pathname === '/new-order' ? "current orders" : "new order";
    route = pathname === '/new-order' ? "/current-orders" : "/new-order"; 
  } else if (location.pathname === '/users' || location.pathname === '/products') {
    text = pathname === '/users' ? "products" : "employees";
    route = pathname === '/users' ? "/products" : "/users";
  }
  
  return {route, text}
}

export function Header({ showButton }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [text, setText] = useState(getNavigationDetails(location.pathname).text);

  const clickHandler = () => {
    const details = getNavigationDetails(location.pathname);

    navigate(details.route);
    setText(details.text);  
  };

  return (
    <header className={styles.header_login}>
      <img src={logo} alt="Burguer Queer Logo" className={styles.logo_header} />
      <img src={logoMobile} alt="Burguer Queer Logo" className={styles.logo_mobile} />

      {showButton && (
        <Button
          id="orders-button"
          type="button"
          className={styles.orders_btn}
          data-testid="orders-button"
          onClick={clickHandler}
        >
          {text}
        </Button>
      )}
    </header>
  );
}
