import React from 'react';
import {Button,Modal} from 'react-bootstrap';
import {useState} from 'react';
import cartModel from '../store/cart';
import orderModel from '../store/order';
import warehouse from '../store/products'
import {Link} from 'react-router-dom';
import {routesMap} from '../routes/routes';


function ModalDialog(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let succes = () => {
        handleClose();
        props.history.push(routesMap.result)
    }
    let order = cartModel.products.map((product)=>{
        return (
            <tr key={product.id}>
                <td>{warehouse.getProductData('title',product.id)}</td>
                <td>{warehouse.getProductData('price',product.id)}</td>
                <td>{product.current}</td>
                <td>{product.current * warehouse.getProductData('price',product.id)}</td>
            </tr>
        );
    })
    return (
        <>
            
            <Button variant="primary" onClick={handleShow} {...props.nativeProps}>
                Confirm
            </Button>
            <br /><br />
            <Link className='btn btn-primary' to={routesMap.cart}> Back </Link>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{`Dear ${orderModel.consumer.name} `}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please, check and confirm your order:</p>
                    <table className='table table-bordered table-striped'>
                        <tbody>
                            <tr>
                                <td>Title</td>
                                <td>Price</td>
                                <td>Count</td>
                                <td>Total</td>
                            </tr>
                            {order}
                            <tr>
                                <td colSpan='3' align='right' className='font-weight-bold'>Final amount:</td>
                                <td className='font-weight-bold'>{warehouse.total}</td>
                            </tr>
                        </tbody>

                    </table>


                </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={succes}>
              Confirm
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default ModalDialog;