import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Products from './Products'
import Wishlist from './Wishlist'


const Allroutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Products /> } />
    <Route path="/wishlist"   element={<Wishlist/>}  />
   </Routes>
  )
}

export default Allroutes