import React from 'react';
import order from '../store/order'

function ResultScreen(props) {
    return (
        <div className='container'>
            <h1 className='h1'>Congratulations!</h1>
            <p>Dear {order.consumer.name}. Your order is processing</p>
            <p>We sent you mail to {order.consumer.email} or calling to {order.consumer.phone}</p>

        </div>
    )
}

export default ResultScreen;