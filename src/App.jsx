import Navbar from './components/Navbar'
import 'boxicons'
import { Route, Router, Routes } from 'react-router-dom'
import Paginas from './components/Navbar/Paginas'
import DataProvider from './Context/Dataprovider'


function App() {
  return (
    <DataProvider>
    <div className="App">
        <Navbar />
        <Paginas />
    </div>
    </DataProvider>
  )
}

export default App
