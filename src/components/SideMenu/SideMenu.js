import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideMenu.module.css'

function SideMenu(props) {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <NavLink to='/' className={styles.txt} activeClassName={styles.active} exact>Home</NavLink>
        </li>
        <li>
          <NavLink to='/cart' className={styles.txt} activeClassName={styles.active} exact>Cart</NavLink>
        </li>
        <li>
          <NavLink to='/order' className={styles.txt} activeClassName={styles.active} exact>Buy
            now</NavLink>
        </li>
      </ul>
    </div>
  )
}

    
export default SideMenu;