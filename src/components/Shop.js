import React from 'react';
import {observer} from 'mobx-react';
import Products from './Products';
import {Route} from 'react-router-dom';


@observer class Shop extends React.Component {

    render () {
    
        return (
            
            <Products />
        )
    }

}

export default Shop