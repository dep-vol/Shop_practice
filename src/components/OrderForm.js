import React from 'react';
import AppInput from './AppInput';
import Modal from './Modal';
import withStore from '../HOCs/withStore'


class OrderForm extends React.Component {
    
    render () {

        let orderModel = this.props.stores.order
        return (
        
            <form className='container'>
                <h1 className='h3 text-center'>Confirm your account data, please:</h1>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Enter your name:</label>
                    <AppInput nativeProps={{type:'text',
                                            className:'form-control',
                                            id:'formGroupExampleInput'
                                            }}
                              value={orderModel.consumer.name}
                              onChange={(e)=>orderModel.check(e,'name')}  />
                    <div className="invalid-feedback">
                        Please choose a correct username.
                    </div>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">E-mail:</label>
                    <AppInput nativeProps={{type:'text',
                                            className:'form-control',
                                            id:'formGroupExampleInput2'
                                            }}
                              value={orderModel.consumer.email}
                              onChange={(e)=>orderModel.check(e,'email')}  />
                    <div className="invalid-feedback">
                        Please choose a correct e-mail.
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Phone:</label>
                    <AppInput nativeProps={{type:'text',
                                            className:'form-control',
                                            id:'formGroupExampleInput2'
                                            }}
                              value={orderModel.consumer.phone}
                              onChange={(e)=>orderModel.check(e,'phone')}  />
                    <div className="invalid-feedback">
                        Please choose a correct phone.
                    </div>
                </div>
                <Modal nativeProps={{disabled:orderModel.status}} history={this.props.history} /> 
                
            </form>
            
        )
    }
   
            }
            
export default withStore(OrderForm)