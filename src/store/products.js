import {observable,action,computed} from 'mobx';
import Cart from './cart';
class Warehouse {
   
    @observable products = getProducts();
    
    @action changeInCartState(product) {
        let i = this.products.indexOf(product)
        this.products[i].inCart = !this.products[i].inCart
    }
   
    @action getProduct (value) {
       return this.products.find(el => el.id === parseInt(value))
    }

    @action moveToCart (product) {
        Cart.addCartItem(product)
    }

    @action getProductData (data,id) {
        return this.getProduct(id)[data]
    }

    @computed get total() {
        return Cart.products.reduce((t, pr) => t + this.getProductData('price',pr.id) * pr.current, 0);
    }



}

export default new Warehouse();






function getProducts () {
    return [
        {
            id: 100,
            title: 'Ipnone 200',
            price: 12000,
            rest: 10,
            current: 1,
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            inCart: false
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
            current: 1,
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            inCart: false
        },
        {
            id: 103,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
            current: 1,
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            inCart: false
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            price: 15000,
            rest: 8,
            current: 1,
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            inCart: false
        }
    ]    
}