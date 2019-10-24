import React from 'react';
import AppMinMax from './Counter';
import cartModel from '.././store/cart';
import { observer } from 'mobx-react';
import {Link} from 'react-router-dom';
import {routesMap} from '../routes/routes';
import warehouse from '../store/products'

@observer class Cart extends React.Component {

    

    render() {
        let productsRows = cartModel.products.map((product, i) => {

            return (
                <tr key={product.id}>
                    <td>{warehouse.getProductData('title',product.id)}</td>
                    <td>{warehouse.getProductData('price',product.id)}</td>
                    <td>
                        <AppMinMax min={1}
                            max={warehouse.getProductData('rest',product.id)}
                            cnt={product.current}
                            onChange={(cnt) => cartModel.change(i, cnt)}
                        />
                    </td>
                    <td>{product.current * warehouse.getProductData('price',product.id)}</td>
                    <td><button className="btn btn-danger" onClick={(e) => cartModel.deleteItem(i)}>Delete</button></td>
                </tr>
            );
        });
        return (
            <div className='container-fluid'>
                <h2 className='h2 text-center'>Cart</h2>
                <table className='table table-bordered table-striped'>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                            <td>Delete item</td>
                        </tr>
                        {productsRows}
                        <tr>
                            <td colSpan='3' align='right' className='font-weight-bold'>Final amount:</td>
                            <td className='font-weight-bold'>{warehouse.total}</td>
                        </tr>
                    </tbody>

                </table>
                <Link to={routesMap['order']} className='btn btn-primary'> Make order </Link>

            </div>
        )
    }

}

export default Cart;