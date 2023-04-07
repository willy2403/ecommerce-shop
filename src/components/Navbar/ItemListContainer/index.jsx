import React, { useContext } from 'react'
import {DataContext} from '../../../Context/Dataprovider'
import { ItemList } from '../ItemList'

const ItemListContainer = () => {
    const value = useContext(DataContext)
    const [Products] = value.Products
    
  return (
    <>
        <h1 className='title'>Productos</h1>
         <div className='productos'>
            {
                Products.map(Products=>(
                    <ItemList key={Products.id} 
                    id={Products.id}
                    title={Products.title}
                    price={Products.price}
                    image={Products.image}
                    category={Products.category}
                    cantidad={Products.cantidad}                    
                 />
                ))      
            }         
         </div>
    </>
  )
}

export default ItemListContainer