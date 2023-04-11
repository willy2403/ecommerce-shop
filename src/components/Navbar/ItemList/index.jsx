import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../../Context/Dataprovider'


export const ItemList = ({ id, title, price, image, category }) => {

   const value = useContext(DataContext);
   const addCart = value.addCart;

  return (
    <div className="producto">
    <Link to={`/itenlists/${id}`}>
    <div className='producto__img'>
        <img src={image} alt={title} />
    </div>
    </Link>
        <div className='producto__footer'>
            <h1> {title} </h1>
            <p>{category}</p>
            <p className='price'>${price}</p>
        </div>
        <div className='buttom'>
            <button className='btn' onClick={() => addCart(id)}>Añadir al carrito</button>            
                <div>
                    <Link to={`/itenlists/${id}`}className='btn'>Vista</Link>
                </div>
        </div>
        </div>
  )
}
