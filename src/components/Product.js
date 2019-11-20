import React from 'react';
import {Link} from 'react-router-dom';
import withStore from '../HOCs/withStore';

class Product extends React.Component {

    render() {

        let cartModel = this.props.stores.cart;
        let warehouse = this.props.stores.products;
        let product = warehouse.getProduct(this.props.match.params.id);
        let btn = ()=> {
            if (!cartModel.inCart(product.id)) {
                return <button className="btn btn-success" onClick={() => cartModel.addCartItem(product.id)} style={{ marginRight: '5px' }}>Add to cart</button>
            }
            else {
                return <button className="btn btn-danger"
                    onClick={() => { cartModel.deleteItem(product.id) }} style={{ marginRight: '5px' }}>Remove from cart</button>
            }
        }

        if (!product) {
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Product have not found</h5>
                        <p className="card-text">Please check your URL</p>
                    </div>
                </div>
            )
        }
        else {
            return (

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.text}</p>
                        {btn()}
                        <Link className="card-link" to='/'>Back</Link>
                    </div>
                </div>


            )
        }

    }

}

export default withStore(Product) 