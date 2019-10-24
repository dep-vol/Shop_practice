import { observable, action, computed } from 'mobx';

class Order {

    @observable consumer = {
        name: '',
        email: '',
        phone: ''
    };

    @action setConsumer = (el) => {
        this.consumer = {...this.consumer,...el};
    };

    @action error = (e)=> {
        e.target.className = 'form-control is-invalid'
    }
    @action succes = (e) => {
        e.target.className = 'form-control is-valid'
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
                let pattern = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/ ;
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
}
    @computed get status() {
        if((this.consumer.name!=='')&&(this.consumer.email!=='')&&(this.consumer.phone!=='')) {
            return false
        }
        else {
            return true
        }
    }

}

export default new Order();