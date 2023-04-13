import React, { useContext } from 'react'
import db from '../../../db/firebase-config';
import { DataContext } from '../../Context/Dataprovider'
import { addDoc, collection, getDoc } from 'firebase/firestore';
import { useState } from 'react';




const Checkout = () => {
     const value = useContext(DataContext);
     const [Checkout, setCheckout] = value.Checkout;
     const [inputTitle, setInputTitle] = useState("");
     
  return (
    <div>
       
    </div>
  )
}

export default Checkout