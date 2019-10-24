import {observable,action,computed} from 'mobx';
import warehouse from './products';
class Cart {
   
    @observable products = [];
   
    
    @action change(i,cnt) {
        this.products[i].current = cnt;
    }

    @action deleteItem(i) {
        this.products.splice(i, 1);
    }

    @action addCartItem (product) {
        if(!this.getProductCart(product.id)) {
            this.products = [...this.products,{id:product.id,current:product.current}]
            warehouse.changeInCartState(product)
        }
    }

    @action removeCartItem (product) {
        if(this.getProductCart(product.id)) {
            let i = this.products.findIndex((el)=>el.id===product.id)
            this.deleteItem(i)
            warehouse.changeInCartState(product)
        }
    }

    @action getProductCart (value) {
        return this.products.find((el) => el.id === parseInt(value))
     }

     

}



export default new Cart();




