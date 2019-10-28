import {observable,action,computed} from 'mobx';
import Cart from './cart';
class Warehouse {
   
    @observable products = getProducts();

    @computed get productsMap () {
        let map = {};
        this.products.forEach((pr,i) => map[pr.id.toString()] = i);
        return map
        }
    
   
   
    @computed get getProduct () {
       return (id)=>this.products[this.productsMap[id]]
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
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            
        },
        {
            id: 101,
            title: 'Samsung AAZ8',
            price: 22000,
            rest: 5,
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        },
        {
            id: 103,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            
        },
        {
            id: 105,
            title: 'Huawei ZZ',
            price: 15000,
            rest: 8,
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            
        }
    ]    
}