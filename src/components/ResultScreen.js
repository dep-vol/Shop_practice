import React from 'react';
import withStore from '../HOCs/withStore';

function ResultScreen(props) {
    return (
        <div className='container'>
            <h1 className='h1'>Congratulations!</h1>
            <p>Dear {props.stores.order.consumer.name}. Your order is processing</p>
            <p>We sent you mail to {props.stores.order.consumer.email} or calling to {props.stores.order.consumer.phone}</p>

        </div>
    )
}

export default withStore(ResultScreen);