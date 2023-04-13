import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './home'
import ItemListContainer from './ItemListContainer'
import { ItemDetailContainer } from '../ItemDetailContainer'
import Checkout from '../Checkout'

const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path='/Inicio' element={<Home/>} />
        <Route path='/itenlist' element={<ItemListContainer/>} />
        <Route path='/itenlists/:id' element={<ItemDetailContainer/>} />
        <Route path='/Checkout' element={<Checkout />} />
      </Routes>
    </section>
  )
}

export default Paginas