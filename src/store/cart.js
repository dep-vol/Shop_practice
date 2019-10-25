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
        return this.products.map((pr)=>)
    }

    
   

     

}



export default new Cart();




