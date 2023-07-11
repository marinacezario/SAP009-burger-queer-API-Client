import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from './Header.module.css';
import logo from '../../assets/img/logo-header.png';
import logoMobile from '../../assets/img/logo-header-mobile.png';
import { Button } from '../Button/Button';

const getNavigationDetails = (pathname) => {
  const routeWaiter = pathname === '/new-order' ? "/current-orders" : "/new-order"; 
  const textWaiter = pathname === '/new-order' ? "current orders" : "new order";
  const routeAdmin = pathname === '/users' ? "/products" : "/users";
  const textAdmin = pathname === '/users' ? "products" : "employees";

  return {routeWaiter, textWaiter, routeAdmin, textAdmin}
}

export function Header({ showButton }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [text, setText] = useState(getNavigationDetails(location.pathname).text);

  const clickHandler = () => {
    const details = getNavigationDetails(location.pathname);

    if (location.pathname === '/new-order' || location.pathname === '/current-orders') {
      navigate(details.routeWaiter);
      setText(details.textWaiter);
    } else if (location.pathname === '/users' || location.pathname === '/products') {
      navigate(details.routeAdmin);
      setText(details.textAdmin);
    }    
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
