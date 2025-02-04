import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Shop from './shop'
import Cart from './cart'
const Rout = ({shop, Filter, allcatefilter}) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} />}/>
        <Route path='cart' element={<Cart />}/>
      </Routes>
    </>
  )
}

export default Rout
