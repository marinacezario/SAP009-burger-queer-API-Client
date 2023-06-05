import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/img/logo-header.png'

export function Header() {
  return(
    <div className={styles.header_login}>
      <img src={logo} alt="Burguer Queer Logo" className={styles.logo_header}/>
    </div>
  )
}
