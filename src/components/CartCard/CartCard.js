import React from 'react';
import styles from './CartCard.module.css';
import withStore from '../../HOCs/withStore';
import img from '../../img/cart.jpg';


function CartCard(props) {
    let cartModel = props.stores.cart;
    return (
        <div className={styles.container}>
            <div className={styles.logo}>MEGA TECTO SHOP</div>
            <div className={styles.cart}>
                <img src={img} />
                <div className={styles.body}>
                    <div className={styles.h_title}>Total in Cart:

                    </div>
                    <div>
                        Count: {cartModel.totalCount}
                    </div>
                    <div>
                        Total price: {cartModel.total}
                    </div>

                </div>
            </div>


        </div>
    )

}

export default withStore(CartCard);
