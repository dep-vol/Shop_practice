import { observable, action, computed } from 'mobx';

class Order {
    constructor (rootStore) {
        this.rootStore = rootStore;
    }

    @observable consumer = {
        name: '',
        email: '',
        phone: ''
    };

    @observable valid = {
        name:'',
        email:'',
        phone:''
    };

    @observable lastOrderCache = {consumer:{}, total:null}

    @action setConsumer = (el) => {
        this.consumer = {...this.consumer,...el};
    };

    @action setCache() {
       
        this.lastOrderCache = {...this.lastOrderCache, consumer:this.consumer, total:this.rootStore.cart.total}
        
    }

    @action error = (e)=> {
        this.valid[e.target.id] = 'invalid'
    }
    @action succes = (e) => {
        this.valid[e.target.id] = 'valid'
    }

    @action check = (e, type) => {
        switch (type) {
            case 'name': {
                let pattern = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
                if(pattern.test(e.target.value)) {
                    this.setConsumer({name:e.target.value});
                    this.succes(e);
                }  
                else {
                    this.error(e,'name');
                } 
                break;
            }
            case 'email': {
                let pattern = /^[^@]+@[^@.]+\.[^@]+$/;
                if(pattern.test(e.target.value)) {
                    this.setConsumer({email:e.target.value})
                    this.succes(e);
                }
                else {
                    this.error(e,'name');
                }
                break;
            }
            case 'phone': {
                let pattern = /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/ ;
                if(pattern.test(e.target.value)) {
                    this.setConsumer({phone:e.target.value});
                    this.succes(e);
                }
                else {
                    this.error(e,'name');
                }
                break;
            }
            default: console.log('error')
       
    }
};
    @computed get status() {
        return !((this.consumer.name !== '') && (this.consumer.email !== '') && (this.consumer.phone !== ''));
    }

}

export default Order;