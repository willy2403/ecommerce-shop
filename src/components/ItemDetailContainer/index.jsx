import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../Context/Dataprovider'
import { useParams } from 'react-router-dom'
import { ItemList } from '../Navbar/ItemList'


export const  ItemDetailContainer = () => {
     const value = useContext(DataContext);
     const [Products] = value.Products;
     const addCart = value.addCart;
     const [Detail, setDetail] = useState([])
     const [url, setUrl]= useState(0);
     const [images, setImages] = useState('');
     const Params = useParams();
    let item = 0;


    useEffect(() =>{
        console.log('re render' , Params.id)
        item=0;
        Products.forEach(Products =>{
            if(Products.id === parseInt(Params.id)){
                setDetail(Products)
                setUrl(0)
            }
        })
    }, [Params.id, Products])

    useEffect(() =>{
        const values = `${Detail.img1}${url}${Detail.img2}`;
        setImages(values) 
    },[url, Params.id])


  return (
    <>
        {
            <div className="detalles">   
                <h2>{Detail.title}</h2>
                    <p className="price">${Detail.price}</p>
                <div className="grid">
                     <p className="nuevo">Nuevo</p>
                    <div className="tamano">
                        <select placeholder="Tamaño" >
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="1">5</option>
                        <option value="1">6</option>
                        <option value="1">7</option>
                        <option value="1">8</option>
                        </select>
                        <p>Tamaño</p>
                    </div>
              </div>
              <button onClick={() => addCart(Detail.id)}>Añadir al carrito</button>         
                <img src={Detail.image} alt={Detail.title}/> 
              <div className="description">
                <p></p>
              </div><b>Description:</b> Suma más y más kilómetros con tus Zapatillas Nike, que aportan amortiguación y confort a cada paso que des. Su capellada transpirable y suela diseñada por computadora para una mejor tracción son ideales hasta para los corredores más exigentes.</div>
        }

            <h2 className="relacionados">Productos relacionados</h2>
            <div className='productos'>
            {
                Products.map((Products)=>{
                    if((item < 6)&&(Detail.category === Products.category)){
                        return<ItemList 
                    key={Products.id} 
                    id={Products.id}
                    title={Products.title}
                    price={Products.price}
                    image={Products.image}
                    category={Products.category}
                    cantidad={Products.cantidad}                    
                 />
                    }
                } 
                )}         
         </div>
    </>
  )
}
