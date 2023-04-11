import { createContext, useState, useEffect, } from "react";
import Data from '../Data'
export const DataContext = createContext();



export const DataProvider = (props) => {
    const [Products, setProducts] = useState([])
    const [Menu,setMenu] = useState(false);
    const [Cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() =>{
        const Products = Data.items
        if(Products){
            setProducts(Products)    
        }else{
            setProducts([])
        }
        
    },[])

    const addCart = (id)=>{
        const check = Cart.every(item =>{
            return item.id !== id;
        })
        if(check){
            const Data = Products.filter(Products=>{
                return Products.id === id
            })
            setCart([...Cart,...Data]);
        }else{
            alert("El producto se ha añadido al carrito")
        }
    }

    useEffect(() =>{
        const DataCart = JSON.parse(localStorage.getItem('DataCart')
        )
        if(DataCart){
            setCart(DataCart)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('DataCart',JSON.stringify(Cart))
    },[Cart])

    useEffect(()=>{
        const getTotal = () =>{
         const res = Cart.reduce((prev, item)=>{
            return prev + (item.price * item.cantidad);
         },0)
         setTotal(res)   
        }
        getTotal();
    }, [Cart])

    const value = {
        Products : [Products],
        Menu : [Menu, setMenu],
        addCart : addCart,
        Cart : [Cart, setCart],
        total : [total, setTotal]
    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider;