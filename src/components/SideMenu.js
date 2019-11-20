import React from 'react';
import { NavLink } from 'react-router-dom'

class SideMenu extends React.Component{
    
  
    render() {
        

        return (

            <div className='col-3'>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <NavLink to='/' className='text-primary' activeClassName='text-danger' exact>Home</NavLink>
                    </li>
                    <li className='list-group-item' >
                        <NavLink to='/cart' className='text-primary' activeClassName='text-danger' exact>Cart</NavLink>
                    </li>
                    <li className='list-group-item'>
                    <NavLink to='/order' className='text-primary' activeClassName='text-danger' exact>Buy now</NavLink>
                    </li>

                </ul>
            </div>

        )

    }

}
    
    export default SideMenu;