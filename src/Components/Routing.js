import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Varieties from '../Pages/Varieties'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'

const Routing = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/varieties" element={<Varieties />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  )
}

export default Routing