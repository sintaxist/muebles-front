import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import { ProductDetail } from './pages/productDetails';
import { Footer } from './components/footer';
import ScrollToTop from './hooks/ScrollToTop';
import './styles/App.scss'
import QuienesSomos from './pages/quienes-somos';
import Faqs from './pages/faq';
import Contacto from './pages/contacto';
import Productos from './pages/productos';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';
import ComoComprar from './pages/como-comprar';

function App () {

  const initialState = useInitialState();

  // console.log(initialState)

  return (
    <AppContext.Provider value={initialState}>
      <div id='page-container'>
        <Router>
          <ScrollToTop />
          <Navbar/>
          <div id="content-wrap">
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="producto/:productId" element={<ProductDetail />}></Route>
              <Route path="catalogo/:categoryId" element={<Productos />}></Route>
              <Route path="quienes-somos" element={<QuienesSomos />}></Route>
              <Route path="como-comprar" element={<ComoComprar />}></Route>
              <Route path="contacto" element={<Contacto />}></Route>
              <Route path="faq" element={<Faqs />}></Route>
              <Route path="catalogo" element={<Productos />}></Route>
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </AppContext.Provider>
  )
}

export default App;
