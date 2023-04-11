import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../Context/Dataprovider'
import { useParams } from 'react-router-dom'


export const  ItemDetailContainer = () => {
     const value = useContext(DataContext);
     const [Products] = value.Products;
     const [Detail, setDetail] = useState([])
     const Params = useParams();

      useEffect(() =>{
          ProductsforEach(Products =>{
          if(Products.id === parseInt(Params.id)){
             setDetail(Products) 
          }
     })
  },[Params.id, Products])
  return (
    <>
        {
            <div className="detalles">   
                <h2>{Detail.title}</h2>
                    <p className="price">${Detail.price}</p>
            
            </div>
}
    </>
  )
}
