import React from 'react'
import Nike from "../../images/Nike.jpg"
import { Link } from 'react-router-dom'

const Navbar = () => {
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
            <div className='cart'>
                <box-icon name="cart"></box-icon>
                <span className='item__total'>3</span>
            </div>
       
    </header>
  )
}

export default Navbar