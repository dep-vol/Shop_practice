import React from 'react';
import AppMinMax from '../../Counter/Counter';
import withStore from '../../../HOCs/withStore'
import Cart from "../Cart";
import PropTypes from 'prop-types';
import styles from '../Cart.module.css'

class CartContainer extends React.Component {
  //...Types...
  static propTypes = {
    stores: PropTypes.object
  };
  static  defaultProps = {
    stores: {}
  };
  //...Types...

  render() {

    let cartModel = this.props.stores.cart;
    let productsRows = cartModel.detailedProducts.map((product) => {

      return (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>
            <AppMinMax min={1}
                       max={product.rest}
                       cnt={product.cnt}
                       onChange={(cnt) => cartModel.change(product.id, cnt)}
                       disabled={this.props.stores.activeProducts.actionState[product.id]}
            />
          </td>
          <td>{product.cnt * product.price}</td>
          <td>
            <button className={styles.btnDanger} onClick={(e) => cartModel.deleteItem(product.id)}
                    disabled={this.props.stores.activeProducts.actionState[product.id]}>Delete
            </button>
          </td>
        </tr>
      )
    });
    return (
      <Cart productsRow={productsRows} total={cartModel.total}/>
    )
  }
}

export default withStore(CartContainer);