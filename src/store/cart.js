import {observable,action,computed} from 'mobx';

class Cart {

    constructor (rootStore) {
        this.rootStore = rootStore;
        this.api = this.rootStore.api.cart;
        this.storage = this.rootStore.storage;
        this.token = this.storage.getItem('cartToken');
        this.load()
    }
   

    @observable products = [];

    @action load() {
        this.api.cartLoad(this.token).then((data) => {
            this.products = data.cart;
            
            if(data.needUpdate){
                this.token = data.token;
                this.storage.setItem('cartToken', this.token);
            }
        });
    }
   

    @action change(id, cnt) {
        let index = this.products.findIndex((pr) => pr.id === id)
        this.products[index].current = cnt;
    }

    @action deleteItem(id) {
        let index = this.products.findIndex((pr) => pr.id === id)
        this.api.delItem(this.token,id).then((res)=>{
            if (res) {
                this.products.splice(index, 1);
            }
        })
        
    }

    @action addCartItem(id) {
        this.api.add(this.token,id).then((res)=>{
            if (res) {
                this.products.push({ 'id': id, 'current': 1 })
            }
            else {
                console.log('wtf')
            }
            
        })
        
    }

    @computed get detailedProducts() {
        return this.products.map((pr)=>{
           return {...this.rootStore.products.getProduct(pr.id), current:pr.current} 
        })
    }

    @computed get total() {
        return this.detailedProducts.reduce((t, pr) => t + pr.price * pr.current, 0);
    }

    @computed get inCart() {
        return (id) => this.products.some((pr) => pr.id === id)
    }

    
    @computed get totalCount() {
        return this.products.reduce((t, pr) => t + pr.current, 0);
    }

   

     

}



export default Cart;




