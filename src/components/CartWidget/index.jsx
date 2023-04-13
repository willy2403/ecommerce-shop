import React, { useContext, useState } from 'react'
import card from "../../../public/images/img03.jpg"
import { DataContext } from '../../Context/Dataprovider'
import {  TextField } from '@mui/material'
import { addDoc, collection, getFirestore } from 'firebase/firestore'



const CartWidget = () => {
  const value = useContext(DataContext);
  const [Menu, SetMenu] = value.Menu;
  const [Cart, setCart] = value.Cart; 
  const [total] = value.total;
      

  const Tooglefalse = ()=>{
    SetMenu(false);
  }

  const show1 = Menu ? "carritos show" : "carritos";
  const show2 = Menu ? "carrito show"  : "carrito"; 
 
 const resta = id =>{
    Cart.forEach(item =>{
        if(item.id === id){
            item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
        }
        setCart([...Cart])
    })
 }

 const suma = id =>{
    Cart.forEach(item =>{
        if(item.id === id){
            item.cantidad +=1;
        }
        setCart([...Cart])
    })
 }

 
  const removeProducts = id =>{
    if(window.confirm("¿Quiere remover el producto")){
        Cart.forEach((item, index)=>{
            if(item.id === id){
                item.cantidad = 1;
                Cart.splice(index, 1)
            }
          
        })}
        setCart([...Cart])
  }

    const orden = {
        buyer:{
        nombre: '',
        apellido: '',
        email: '',
        numero: ''},
        items: Cart.map(Products => ({id: Products.id, title: Products.title, price: Products.price, cantidad: Products.cantidad})),
        total: total,
    }

  const HandleClick = () =>{
    const db = getFirestore();
    const ordenColletion = collection(db, 'ordenes');
    addDoc(ordenColletion, orden)
    .then(({id}) => console.log(id))
  }
 

    return (
    <div className={show1}>
        <div className={show2}>
            <div className="carrito__close" onClick={Tooglefalse}>
                <Box-icon name="x"></Box-icon>
            </div>
            <h2>Su carrito</h2>
            
            
            <div className="carrito__center">
            {

                Cart.length === 0 ? <h2 style={{textAlign:"center", fontSize:"3rem"}}>
                    
                    Carrito Vacio
                    </h2> : <>
                {
                Cart.map((Products)=>(

                    <div className="carrito__item" key={Products.id}>
                    <img src={Products.image} alt="" />
                    <div>
                        <h3>{Products.title}</h3>
                        <p className="price">${Products.price}</p>
                    </div>
                    <div>      
                        <box-icon Name="up-arrow-alt" type="solid" onClick={() =>suma(Products.id)}></box-icon>
                            <p className="cantidad">{Products.cantidad}</p>
                        <box-icon Name="down-arrow-alt" type="solid" onClick={() =>resta(Products.id)}></box-icon>
                    </div>
                    <div className='remove_item' onClick={() => removeProducts(Products.id)}>
                        <box-icon name="trash"></box-icon>
                    </div>
                </div>
                ))
                }
                </>
            }
            </div>
           
            <div className="carrito__footer">     
                <div className='checkbox' > 
                <TextField id="outlined-basic" label="Nombre" variant="outlined" value={orden.nombre} />
                <TextField id="outlined-basic" label="Apellido" variant="outlined" value={orden.apellido}/>               
                <TextField id="outlined-basic" label="Email" type="email" value={orden.email} ></TextField>
                <TextField id="outlined-basic" label="Telefono" type="number" value={orden.numero}></TextField>   
                </div>
                <h3>Total:${total}</h3>                
                <button className='btn' onClick={HandleClick}>Pagar</button>
              
            </div>
        </div>
        
    </div>
  )
}

export default CartWidget