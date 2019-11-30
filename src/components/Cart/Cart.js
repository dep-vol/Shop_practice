import React from 'react';
import {Link} from 'react-router-dom';
import {routesMap} from '../../routes/routes';
import PropTypes, {element} from 'prop-types';
import styles from './Cart.module.css'

function Cart (props) {
    return (
      <div className={styles.container}>
        <h2>Cart</h2>
        <table>
          <tbody>
          <tr className={styles.tBody}>
            <td>Title</td>
            <td>Price</td>
            <td>Count</td>
            <td>Total</td>
            <td>Delete item</td>
          </tr>
          {props.productsRow}
          <tr className={styles.tBody}>
            <td colSpan='3' align='right' >Final amount:</td>
            <td>{props.total}</td>
          </tr>
          </tbody>
        </table>
        <Link to={routesMap['order']} className={styles.go}> Make order </Link>
      </div>
    )
}
//...Types...
  Cart.propTypes = {
    productsRow: PropTypes.arrayOf(element),
    total: PropTypes.number
  };
  Cart.defaultProps = {
    productsRow: [],
    total:0
  };
//...Types...

export default Cart;