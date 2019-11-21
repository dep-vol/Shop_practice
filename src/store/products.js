import {observable,action,computed} from 'mobx';


class Warehouse {

    constructor (rootStore) {
        this.rootStore = rootStore;
        this.api = this.rootStore.api.products;
        
    }
   
    @observable products = [];

    @action load() {
        return new Promise((resolve,reject) => {
            
            this.api.loadAll().then((data) => {
                this.products = data
                setTimeout(()=>{
                    resolve(true);
                    
                },700) 
            })
        })
       
    }

    @computed get productsMap () {
        let map = {};
        this.products.forEach((pr,i) => map[pr.id.toString()] = i);
        return map
        }
    
   
   
    @computed get getProduct () {
       return (id)=>this.products[this.productsMap[id]]
    }


   


}

export default Warehouse;













