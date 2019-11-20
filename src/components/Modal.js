import React from 'react';
import {Button,Modal} from 'react-bootstrap';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {routesMap} from '../routes/routes';
import withStore from '../HOCs/withStore';



function ModalDialog(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cartModel = props.stores.cart;
    const orderModel = props.stores.order;
    const warehouse = props.stores.products;


    let succes = () => {
        handleClose();
        props.history.push(routesMap.result)
    }

    let order = cartModel.detailedProducts.map((product)=>{
        return (
            <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.current}</td>
                <td>{product.current * product.price}</td>
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
                                <td className='font-weight-bold'>{cartModel.total}</td>
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

export default withStore(ModalDialog);