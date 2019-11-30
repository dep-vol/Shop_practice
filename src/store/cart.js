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
        this.rootStore.activeProducts.changeAct(id)
        let index = this.products.findIndex((pr) => pr.id === id)
        this.api.changeCount(this.token,id,cnt).then((res) => {
            if (res) {
                this.products[index].cnt = cnt;
                this.rootStore.activeProducts.changeAct(id)
            }
        })
        
    }

    @action deleteItem(id) {
        this.rootStore.activeProducts.changeAct(id)
        let index = this.products.findIndex((pr) => pr.id === id)
        this.api.delItem(this.token,id).then((res)=>{
            if (res) {
                this.products.splice(index, 1);
                this.rootStore.activeProducts.changeAct(id)
            }
        })
        
    }

    @action addCartItem(id) {
        this.rootStore.activeProducts.changeAct(id)
        this.api.add(this.token,id).then((res)=>{
            if (res) {

                this.products.push({ 'id': id, 'cnt': 1 })
                this.rootStore.activeProducts.changeAct(id)


            }
            else {
                console.log('wtf')
            }
            
        })
        
    }

    @computed get detailedProducts() {
        return this.products.map((pr)=>{
           return {...this.rootStore.products.getProduct(pr.id), cnt:pr.cnt} 
        })
    }

    @computed get total() {
        return this.detailedProducts.reduce((t, pr) => t + pr.price * pr.cnt, 0);
    }

    @computed get inCart() {
        return (id) => this.products.some((pr) => pr.id === id)
    }

    
    @computed get totalCount() {
        return this.products.reduce((t, pr) => t + pr.cnt, 0);
    }

    @action clean() {
       
        this.api.clean(this.token).then((res) => {
            if (res) {
                this.products = [];
            }
        })
        
    }


     

}



export default Cart;




