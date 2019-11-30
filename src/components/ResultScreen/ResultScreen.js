import React from 'react';
import withStore from '../../HOCs/withStore';
import styles from './ResultScreen.module.css';

function ResultScreen(props) {
    return (
        <div className={styles.container}>
            <h1 className='h1'>Congratulations!</h1>
            <p>Dear {props.stores.order.lastOrderCache.consumer.name}. Your order with total amount {props.stores.order.lastOrderCache.total}$ is processing</p>
            <p>We sent you mail to {props.stores.order.lastOrderCache.consumer.email} or calling to {props.stores.order.lastOrderCache.consumer.phone}</p>

        </div>
    )
}

export default withStore(ResultScreen);