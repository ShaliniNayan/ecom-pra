import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Shop from './shop'
import Cart from './cart'
const Rout = ({cart, shop, Filter, allcatefilter, addtocart}) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />}/>
        <Route path='cart' element={<Cart cart={cart} />}/>
      </Routes>
    </>
  )
}

export default Rout
