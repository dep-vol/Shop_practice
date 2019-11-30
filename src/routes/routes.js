import Cart from '../components/Cart/Container/Cart'
import OrderForm from '../components/Order/OrderForm.js'
import ResultScreen from '../components/ResultScreen/ResultScreen.js'
import Product from '../components/Product.js';
import Products from "../components/Products/Container/Products";

let routes = [
    {
        name: 'index',
        url: '/',
        component: Products,
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