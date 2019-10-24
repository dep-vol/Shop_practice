import React from 'react';
import {observer} from 'mobx-react';
import warehouse from '../store/products';
import {Link} from 'react-router-dom';
import cartModel from '../store/cart'

@observer class Product extends React.Component {

    product = warehouse.getProduct(this.props.match.params.id);

    checkInCart () {
        if(!this.product.inCart) {
            return <button className="btn btn-success" onClick={()=>warehouse.moveToCart(this.product)} style={{marginRight:'5px'}}>Add to cart</button>
        }
        else  {
            return <button className="btn btn-danger" 
                onClick={()=>{
                cartModel.removeCartItem(this.product)
                    
                }
                } 
                style={{marginRight:'5px'}
            }>Remove from cart</button>
        }
    }

    render () {
        
        if(!this.product) {
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
                        <h5 className="card-title">{this.product.title}</h5>
                        <p className="card-text">{this.product.text}</p>
                        {this.checkInCart()}
                        <Link className="card-link" to='/'>Back</Link>
                    </div>
                </div>
                
    
            )
        }
        
    }

}

export default Product