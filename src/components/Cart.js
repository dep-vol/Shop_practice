import React from 'react';
import AppMinMax from './Counter';
import {Link} from 'react-router-dom';
import {routesMap} from '../routes/routes';
import withStore from '../HOCs/withStore'

class Cart extends React.Component {

    

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
                            cnt={product.current}
                            onChange={(cnt) => cartModel.change(product.id, cnt)}
                        />
                    </td>
                    <td>{product.current * product.price}</td>
                    <td><button className="btn btn-danger" onClick={(e) => cartModel.deleteItem(product.id)}>Delete</button></td>
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
                            <td className='font-weight-bold'>{cartModel.total}</td>
                        </tr>
                    </tbody>

                </table>
                <Link to={routesMap['order']} className='btn btn-primary'> Make order </Link>

            </div>
        )
    }

}

export default withStore(Cart);