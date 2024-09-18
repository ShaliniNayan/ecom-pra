import React from 'react'
import { MdLocalShipping } from 'react-icons/md'
import './nav.css'
import { AiOutlineSearch } from 'react-icons/ai'

const Nav = () => {
  return (
    <>
      <div>
        <div className='header'>
            <div className='top_header'>
                <div className='icon'>
                    <MdLocalShipping />
                </div>
                <div className='info'>
                  <p>Free Shipping When Shoping Upto ₹499</p>
                </div>
            </div>
            <div className='mid_header'>
              <div className='logo'>
                <img src='image/logo.webp' alt='logo' />
              </div>
              <div className='search_bar'>
                <input type='text' placeholder='Search' />
                <button><AiOutlineSearch /></button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Nav
