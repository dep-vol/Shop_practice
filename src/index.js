import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import stores from './store/rootStore'
import LoadingScreen from './components/LoadingScreen';


let promise = new Promise((res,reject) => {
    ReactDOM.render(<LoadingScreen />, document.getElementById('root'));
    res(true)
})
    
    


    promise.then(()=>{
        stores.products.load().then(() => {
        ReactDOM.render(<App />, document.getElementById('root'));
    });
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
