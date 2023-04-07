import React, { useContext } from 'react'
import IMG from "../../../images/img01.jpg"


const ItemListContainer = () => {
    
    
  return (
    <>
        <h1 className='title'>Productos</h1>
         <div className='productos'>
            <div className="producto">
            <a href="#">
            <div className='producto__img'>
                <img src={IMG} alt="" />
            </div>
            </a>
                <div className='producto__footer'>
                    <h1> Title </h1>
                    <p>Categoria</p>
                    <p className='price'>$17000</p>
                </div>
                <div className='buttom'>
                    <button className='btn'>Añadir al carrito</button>            
                        <div>
                            <a href="#"className='btn'>Vista</a>
                        </div>
                </div>
                </div>
                <div className="producto">
            <a href="#">
            <div className='producto__img'>
                <img src={IMG} alt="" />
            </div>
            </a>
                <div className='producto__footer'>
                    <h1> Title </h1>
                    <p>Categoria</p>
                    <p className='price'>$17000</p>
                </div>
                <div className='buttom'>
                    <button className='btn'>Añadir al carrito</button>            
                        <div>
                            <a href="#"className='btn'>Vista</a>
                        </div>
                </div>
                </div>
                <div className="producto">
            <a href="#">
            <div className='producto__img'>
                <img src={IMG} alt="" />
            </div>
            </a>
                <div className='producto__footer'>
                    <h1> Title </h1>
                    <p>Categoria</p>
                    <p className='price'>$17000</p>
                </div>
                <div className='buttom'>
                    <button className='btn'>Añadir al carrito</button>            
                        <div>
                            <a href="#"className='btn'>Vista</a>
                        </div>
                </div>
                </div>
                <div className="producto">
            <a href="#">
            <div className='producto__img'>
                <img src={IMG} alt="" />
            </div>
            </a>
                <div className='producto__footer'>
                    <h1> Title </h1>
                    <p>Categoria</p>
                    <p className='price'>$17000</p>
                </div>
                <div className='buttom'>
                    <button className='btn'>Añadir al carrito</button>            
                        <div>
                            <a href="#"className='btn'>Vista</a>
                        </div>
                </div>
                </div>
         </div>
    </>
  )
}

export default ItemListContainer