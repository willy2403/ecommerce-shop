import { createContext, useState, useEffect, } from "react";
import Data from '../Data'
export const DataContext = createContext();



export const DataProvider = (props) => {
    const [Products, setProducts] = useState([])
   
    useEffect(() =>{
        const Products = Data.items
        if(Products){
            setProducts(Products)    
        }else{
            setProducts([])
        }
        
    },[])

    const value = {
        Products : [Products]
    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider;