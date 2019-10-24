import { observable, action, computed } from 'mobx';
import React from 'react';
import Cart from '../components/Cart';
import OrderForm from '../components/OrderForm';
import ResultScreen from '../components/ResultScreen';

class Router {

    @observable activeRoute = 'cart';
    
    routes = {
        'cart' : () => <Cart />,
        'order' : () => <OrderForm />,
        'result' : () => <ResultScreen />
    };

    @computed get component () {
        return this.routes[this.activeRoute]()
    }

    @action moveTo (route) {
        this.activeRoute = route;
    }

}

export default new Router();