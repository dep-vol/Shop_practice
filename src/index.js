import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import stores from './store/rootStore'
import routes from './routes/routes';
import {Route} from "react-router-dom";
import {Provider} from "mobx-react";
import {BrowserRouter as Router} from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

let Components = routes.map((route) => {
    return <Route path={route.url} component={route.component} exact={route.exact} key={route.url}/>
});


ReactDOM.render(<LoadingScreen />,document.getElementById('root'));

stores.products.load().then(() => {
  ReactDOM.render(
    <Provider stores={stores}>
      <Router>
        <App Components={Components}/>
      </Router>
    </Provider>, document.getElementById('root'));

});





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
