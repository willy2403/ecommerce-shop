import Navbar from './components/Navbar'
import 'boxicons'
import { Route, Router, Routes } from 'react-router-dom'
import Paginas from './components/Navbar/Paginas'
import DataProvider from './Context/Dataprovider'
import CartWidget from './components/CartWidget'


function App() {
  return (
    <DataProvider>
    <div className="App">
        <Navbar />
        <CartWidget />
        <Paginas />
    </div>
    </DataProvider>
  )
}

export default App
