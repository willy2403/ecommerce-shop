import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './home'
import ItemListContainer from './ItemListContainer'

const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path='/Inicio' element={<Home/>} />
        <Route path='/itenlist' element={<ItemListContainer/>} />
      </Routes>
    </section>
  )
}

export default Paginas