import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/home'
import Filme from './pages/Filme/filme'
import Header from './pages/Header/header'
import Favoritos from './pages/Favoritos/favoritos'

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/filme/:id' element={ <Filme/> }/>
            <Route path='/favoritos' element={ <Favoritos/> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp 
