import React from 'react';
import {observer} from 'mobx-react';
import warehouse from '../store/products';
import {Link} from 'react-router-dom';
import cartModel from '../store/cart'

@observer class Products extends React.Component {
    style = {
       width: '18rem'
    }
    
    render () {
        
        let products = warehouse.products.map((product) => {
            let btn;
            if(!product.inCart) {
                btn =  <button className="btn btn-success" onClick={()=>cartModel.addCartItem(product.id)} style={{marginRight:'5px'}}>Add to cart</button>
            }
            else  {
                btn =  <button className="btn btn-danger" 
                    onClick={()=>{
                    cartModel.deleteItem(product.id)
                        
                    }
                    } 
                    style={{marginRight:'5px'}
                }>Remove from cart</button>
            }
            return (
                <div className="card" style={this.style} key={product.id}>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.text}</p>
                        <Link className="card-link" to={`/product/${product.id}`} style={{padding:'5px'}} >More info</Link> 
                        {btn}
                        {/* <button className="btn btn-success" onClick={()=>warehouse.moveToCart(product)}>Add to cart</button> */}
                    </div>
                </div>
                
            )
        })

        return (
            <div className="row" >
                {products}
            </div>

        )
    }

}

export default Products