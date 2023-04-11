import React from 'react'
import Portada from "../../../../public/images/inicio.jpg"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='inicio'>
        <Link to="/inicio">
            <h1>Inicio</h1>
        </Link>
        <Link to="/itenlist">
            <h1>Productos</h1>
        </Link>
        <img src={Portada} alt="inicio" />
    </div>
  )
}

export default Home