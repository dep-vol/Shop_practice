import React from 'react';
import styles from './App.module.css'
import withStore from "./HOCs/withStore";
import SideMenu from './components/SideMenu/SideMenu';
import CartCard from './components/CartCard/CartCard';
import { Switch } from "react-router-dom";
import * as PropTypes from 'prop-types';
import {element} from "prop-types";


const App = (props) => {
    let {Components} = props;

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <CartCard/>
                    {/*<hr/>*/}
                </div>
                <div className={styles.mainContainer}>
                    <SideMenu/>
                    <div className={styles.main}>
                        <Switch>
                            {Components}
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    )
};
App.propTypes = {
    stores: PropTypes.object,
    Components: PropTypes.arrayOf(element)
};

App.defaultProps = {
    stores:{},
    Components:[]
};


export default withStore(App);

