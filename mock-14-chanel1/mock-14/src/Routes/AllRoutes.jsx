import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import Products from '../Components/Products'
import Search from '../Components/Search'

function AllRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/search" element={<Search/>} />
    
         
       
    </Routes>
  )
}

export default AllRoutes
