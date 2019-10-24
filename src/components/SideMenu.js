import React from 'react';
import {Link} from 'react-router-dom';

class SideMenu extends React.Component{
    
  
    render() {

        return (

            <div className='col-3'>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='list-group-item'>
                        <Link to='/cart'>Cart</Link>
                    </li>
                    <li className='list-group-item'>
                    <Link to='/order'>Buy now</Link>
                    </li>

                </ul>
            </div>

        )

    }

}
    
    export default SideMenu;