import React from 'react';
import withStore from '../../../HOCs/withStore';
import Products from "../Products";
import * as PropTypes from 'prop-types';

class ProductsContainer extends React.Component {
//***
// Types
// ***
    static propTypes = {
        stores: PropTypes.object.isRequired
    };
    static defaultProps = {
        stores: {}
    };
//***
// Types
// ***
    render() {
        let cartModel = this.props.stores.cart;
        let warehouse = this.props.stores.products;
        let activeProducts = this.props.stores.activeProducts;

        return <Products cartModel={cartModel} warehouse={warehouse} activeProducts={activeProducts}/>
    }
}
export default withStore(ProductsContainer)