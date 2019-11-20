import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './CartCard.module.css';
import withStore from '../../HOCs/withStore';


function CartCard(props) {
    let cartModel = props.stores.cart;
    return (
        <div className={styles.container}>
            <Card className={styles.cart}>
                <Card.Img variant="top" src="img/cart.jpg" />
                <Card.Body>
                    <Card.Title>Total in Cart:

                    </Card.Title>
                    <div>
                        Count: {cartModel.totalCount}
                    </div>
                    <div>
                        Total price: {cartModel.total}
                    </div>

                </Card.Body>
            </Card>

        </div>
    )

}

export default withStore(CartCard);
