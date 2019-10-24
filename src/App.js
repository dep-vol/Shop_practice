import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { observer } from 'mobx-react';
import routes from './routes/routes';
import SideMenu from './components/SideMenu';

@observer class App extends React.Component{
    
  
    render() {

        let Components = routes.map((route) => {
           return <Route path={route.url} component={route.component} exact={route.exact} key={route.url} />
        })

        return (
            <Router>

                <div className='container'>
                    <h1 className='text-center'>MEGA TECTO SHOP</h1>
                    <br></br>
                    <div className='row'>
                        <SideMenu />
                        <div className='col-9'>
                            <Switch>
                                {Components}
                            </Switch>
                        </div>

                    </div>
                </div>

            </Router>


        )

    }
        
    }
    
    export default App;

