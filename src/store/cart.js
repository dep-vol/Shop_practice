import {observable,action,computed} from 'mobx';
import warehouse from './products';
class Cart {
   
    @observable products = [];
   

    @action change(id, cnt) {
        let index = this.products.findIndex((pr) => pr.id === id)
        this.products[index].current = cnt;
    }

    @action deleteItem(id) {
        let index = this.products.findIndex((pr) => pr.id === id)
        this.products.splice(index, 1);
    }

    @action addCartItem(id) {
        this.products.push({ 'id': id, 'current': 1 })
    }

    @computed get detailedProducts() {
        return this.products.map((pr)=>{
           return {...warehouse.getProduct(pr.id), current:pr.current} 
        })
    }

    @computed get total() {
        return this.detailedProducts.reduce((t, pr) => t + pr.price * pr.current, 0);
    }

    @computed get inCart() {
        return (id) => this.products.some((pr) => pr.id === id)
    }

   

     

}



export default new Cart();




