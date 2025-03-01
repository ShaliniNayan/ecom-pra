import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import Shop from './shop'
import Cart from './cart'
import Contact from './contact'
import Payment from './payment'
const Rout = ({cart, setCart, shop, Filter, allcatefilter, addtocart}) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home addtocart={addtocart} />}/>
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/payment' element={<Payment />}/>
      </Routes>
    </>
  )
}

export default Rout
