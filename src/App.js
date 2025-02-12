import React, { useState } from 'react'
import Nav from './comp/nav'
import { BrowserRouter } from 'react-router-dom'
import Rout from './comp/rout'
import Footer from './comp/footer'
import Homeproduct from './comp/home_product'
const App = () => {
  // Add to Cart
  const [cart, setCart] = useState([])
  // Shop Page Product
  const [shop, setShop] = useState(Homeproduct)
  // Shop Search Filter
  const [search, setSearch, ] = useState('')
  // Shop category filter
  const Filter = (x) => {
    const catefilter = Homeproduct.filter((product) => {
      return product.cat === x;
    });
    setShop(catefilter);
  }
  // All category filter
  const allcatefilter = () => {
    setShop(Homeproduct);
  }
  // Shop Search Filter
  const searchlength = (search || []).length === 0
  const searchproduct = () =>{
    if(searchlength)
      {
        alert("Please enter a search")
        setShop(Homeproduct);
      }
      else
      {
        const searchfilter = Homeproduct.filter((x) => {
          return x.cat === search
        });
        setShop(searchfilter);
      }
  }
  // Add to Cart
  const addtocart = (product) => {
    const exit = cart.find((x) => {
      return x.id === product.id;
    });
    if(exit)
    {
      alert ("Product Already Added")
    }
    else
    {
      setCart([...cart, {...product, qty: 1}]);
      alert("Product Added to Cart")
    }
  }
  console.log(cart)
  return (
    <>
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} searchproduct={searchproduct} />
        <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
