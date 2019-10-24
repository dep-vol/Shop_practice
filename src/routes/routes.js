import Cart from '../components/Cart.js'
import OrderForm from '../components/OrderForm.js'
import ResultScreen from '../components/ResultScreen.js'
import Product from '../components/Product.js';
import Shop from '../components/Shop.js';

let routes = [
    {
        name: 'index',
        url: '/',
        component: Shop,
        exact: true
    },
    {
        name: 'cart',
        url: '/cart',
        component: Cart,
        exact: true
    },
    {
        name: 'order',
        url: '/order',
        component: OrderForm,
        exact: true
    },
    {
        name: 'result',
        url: '/result',
        component: ResultScreen,
        exact: true
    },
    {
        name: 'product',
        url: '/product/:id',
        component: Product,
        exact: true
    }
   
]

let routesMap = {};

routes.forEach((route) => {
    if(route.hasOwnProperty('name')) {
        routesMap[route.name] = route.url;
    }

})

export default routes;
export {routesMap}