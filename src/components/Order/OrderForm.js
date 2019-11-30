import React from 'react';
import AppInput from '../Counter/AppInput';
import styles from './OrderForm.module.css';
import withStore from '../../HOCs/withStore'
import NewModal from "./NewModal";
import {routesMap} from "../../routes/routes";
import {Link} from "react-router-dom";
import * as PropTypes from 'prop-types'

class OrderForm extends React.Component {

  // Prop-types
  //***
  static propTypes = {
    stores:PropTypes.object
  };
  static defaultProps = {
    stores:{}
  };
  //***

  render() {

    let orderModel = this.props.stores.order;
    let valid = orderModel.valid;

    let validate = (inp) => {
      switch (valid[inp]) {
        case 'valid':
          return `${styles.input} ${styles.valid}`;
        case 'invalid':
          return `${styles.input} ${styles.invalid}`;
        default:
          return `${styles.input}`
      }
    };

    return (

      <form className={styles.container} onSubmit={(e)=>e.preventDefault()}>
        <h1>Confirm your account data, please:</h1>
        <div className={styles.form}>
          <label htmlFor="formGroupExampleInput">Enter your name:</label>
          <AppInput nativeProps={{
                    type: 'text',
                    className: validate('name'),
                    id: 'name'
                    }}
                    value={orderModel.consumer.name}
                    onChange={(e) => orderModel.check(e, 'name')}/>
          <div className={styles.invalidMsg}></div>
        </div>
        <div className={styles.form}>
          <label htmlFor="formGroupExampleInput2">E-mail:</label>
          <AppInput nativeProps={{
                    type: 'text',
                    className: validate('email'),
                    id: 'email'
                    }}
                    value={orderModel.consumer.email}
                    onChange={(e) => orderModel.check(e, 'email')}/>
          <div className={styles.invalidMsg}></div>
        </div>
        <div className={styles.form}>
          <label htmlFor="formGroupExampleInput2">Phone:</label>
          <AppInput nativeProps={{
                    type: 'text',
                    className: validate('phone'),
                    id: 'phone'
                    }}
                    value={orderModel.consumer.phone}
                    onChange={(e) => orderModel.check(e, 'phone')}/>
          <div className={styles.invalidMsg}></div>
        </div>
        <Link to={routesMap.cart}>
          <button className={styles.btnBack}>Back</button>
        </Link>
        <NewModal cartModel={this.props.stores.cart} history={this.props.history}/>
      </form>
    )
  }
}

export default withStore(OrderForm)