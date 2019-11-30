import React from 'react';
import styles from './NewModal.module.css';
import {routesMap} from "../../routes/routes";
import {inject} from "mobx-react";
import * as PropTypes from 'prop-types'


@inject('stores') class NewModal extends React.Component {
  constructor(props) {
    super(props);
    this.modal = null;
  }

  //Prop-Types
  //***
  static propTypes = {
    stores:PropTypes.object
  };
  static defaultProps = {
    stores:{}
  };
  //***

  state = {
    show:false
  };
  handleShow = (e)=> {
    e.preventDefault();
    this.setState({show:true})
  };
  handleClose = (e)=> {
    e.preventDefault();
    this.setState({show:false})
  };
  succes = () => {
    this.props.stores.order.setCache();
    this.props.stores.cart.clean();
    this.props.history.push(routesMap.result)
  };
  createModalRef = element => this.modal = element;

  render() {

    let order = this.props.cartModel.detailedProducts.map((product)=>{
      return (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.cnt}</td>
          <td>{product.cnt * product.price}</td>
        </tr>
      );
    });
    return(
      <>
        <button onClick={this.handleShow} className={styles.btnGo} disabled={this.props.stores.order.status}>Confirm</button>
      <div className={styles.modal3} ref={this.createModalRef}>
             <div className={styles.body} >
        <div className={styles.closeContainer}>
          <div className={styles.close} onClick={this.handleClose}>
            &#215;
          </div>
        </div>

        <h3>Please, check and confirm your order:</h3>
        <table className='table table-bordered table-striped'>
          <tbody>
          <tr>
            <td>Title</td>
            <td>Price</td>
            <td>Count</td>
            <td>Total</td>
          </tr>
          {order}
          <tr>
            <td colSpan='3' align='right' className='font-weight-bold'>Final amount:</td>
            <td className='font-weight-bold'>{this.props.cartModel.total}</td>
          </tr>
          </tbody>

        </table>

        <button className={styles.btnSucess} onClick={this.succes} >
          Confirm
        </button>

      </div>
    </div>
        </>
    )

  }

 componentDidUpdate(prevProps, prevState, snapshot) {
   if(this.state.show === true) {
     this.modal.className = styles.modal1;
   }
   else {
     this.modal.className = styles.modal3
   }
 }

}

export default NewModal