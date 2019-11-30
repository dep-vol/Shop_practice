import React from 'react';
import {Link} from 'react-router-dom';
import {observer} from "mobx-react";
import styles from './Products.module.css';
import * as PropTypes from 'prop-types';

const Products = (props) => {
  let products = props.warehouse.products.map((product) => {
    let btn;
    if (!props.cartModel.inCart(product.id)) {
      btn = <button className={styles.btnSuccess}
                    onClick={() => props.cartModel.addCartItem(product.id)}
                    disabled={props.activeProducts.actionState[product.id]}>
        Add
      </button>
    } else {
      btn = <button className={styles.btnDanger}
                    onClick={() => {
                      props.cartModel.deleteItem(product.id)
                    }}
                    disabled={props.activeProducts.actionState[product.id]}>
        Remove
      </button>
    }
    return (
      <div className={styles.card} key={product.id}>
          <h5>{product.title}</h5>
        <img src='img/iphone_PNG5733.png' />
        <p>
          {product.text}
          <Link className={styles.cardLink} to={`/product/${product.id}`}>
            ...more info
          </Link>
        </p>



        {btn}
      </div>
    )
  });

  return (
    <div className={styles.main}>
      {products}
    </div>

  )
};

//***
// Types
// ***
Products.propTypes = {
  warehouse: PropTypes.object.isRequired,
  cartModel: PropTypes.object.isRequired,
  activeProducts:PropTypes.object.isRequired
};

Products.defaultProps = {
  warehouse: {},
  cartModel: {},
  activeProducts:{}
};
//***
// Types
// ***
export default observer(Products)