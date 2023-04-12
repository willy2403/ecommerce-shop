import { createContext, useState, useEffect, } from "react";
import db from "../../db/firebase-config"
import { collection, getDoc, getDocs } from "firebase/firestore";
export const DataContext = createContext();



export const DataProvider = (props) => {
    const [Products, setProducts] = useState([]);
    const ProductsRef = collection(db,"Products");
    const [Menu,setMenu] = useState(false);
    const [Cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const getProducts = async () => {
        const ProductsColletion = await getDocs(ProductsRef);
        const Products = ProductsColletion.docs.map((doc) => ({...doc.data(), id: doc.id}));
        setProducts(Products)
       
    };
        useEffect(() =>{
            const Products = ProductsRef.items
            if(Products){
                getProducts(Products)
            }else{
                getProducts([]);
            }
        },[]);


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