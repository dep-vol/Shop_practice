import cartModel from './cart';
import order from './order';
import warehouse from './products';
import * as products from '../api/products'
import * as cart from '../api/cart'

class RootStore {
    constructor(){
        this.api = {
            products,
            cart
        }

        this.storage = localStorage;
        

        this.cart = new cartModel(this);
        this.order = new order(this);
        this.products = new warehouse(this)
    }
    

}

export default new RootStore();