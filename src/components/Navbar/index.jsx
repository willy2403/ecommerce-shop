import React, { useContext } from 'react'
import Nike from "../../../public/images/Nike.jpg"
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context/Dataprovider'

const Navbar = () => {
    const value = useContext(DataContext);
    const [Menu, SetMenu] = value.Menu;
    const [Cart] = value.Cart;

    const ToogleMenu = () =>{
        SetMenu(!Menu)
    }

  return (
    <header>
        <Link to="/inicio">
            <div className='logo'>
                <img src={Nike} alt="logo" width={150} />
            </div>
        </Link>   
            <ul>
                <li>
                    <Link to="/inicio">Inicio</Link>
                </li>
                <li>
                    <Link to="/itenlist">Productos</Link>
                </li>
            </ul>
            <div className='cart' onClick={ToogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className='item__total'>{Cart.length}</span>
            </div>
       
    </header>
  )
}

export default Navbar