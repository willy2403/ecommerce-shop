import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../Context/Dataprovider'
import { useParams } from 'react-router-dom'
import { ItemList } from '../Navbar/ItemList'
import db from '../../../db/firebase-config'
import { doc, getDoc } from "firebase/firestore";



export const  ItemDetailContainer = () => {
     const value = useContext(DataContext);
     const [Products] = value.Products;
     const [item,setItem] = useState([]);
     const addCart = value.addCart;
     const {id} = useParams();
     let items = 0;

    const getItem = async () =>{
       const docRef = doc(db,"Products", id);
       const docSnap = await getDoc(docRef);
       if(docSnap.exists()){
            setItem(docSnap.data());
        }else{
            console.log("No existe el producto");
        }
    };

    useEffect(() =>{
        getItem();
    }, [id]);

  return (
    <>
        {
            <div className="detalles">   
                <h2>{Products.title}</h2>
                    <p className="price">${Products.price}</p>
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
              <button onClick={() => addCart(id)}>Añadir al carrito</button>         
                <img src={Products.image} alt={Products.title}/> 
              <div className="description">
                <p></p>
              </div><b>Description:</b> Suma más y más kilómetros con tus Zapatillas Nike, que aportan amortiguación y confort a cada paso que des. Su capellada transpirable y suela diseñada por computadora para una mejor tracción son ideales hasta para los corredores más exigentes.</div>
        }

            <h2 className="relacionados">Productos relacionados</h2>
            <div className='productos'>
            {
                Products.map((Products)=>{
                    if((items < 6)&&(Products.category === Products.category)){
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
