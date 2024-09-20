import React from 'react'
import { MdLocalShipping } from 'react-icons/md'
import './nav.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'
import { CiLogout } from 'react-icons/ci'
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
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
              {
                isAuthenticated ?
                <div className='user'>
                  <div className='icon'>
                    <img src={user.picture} alt='user' />
                  </div>
                  <div className='btn'>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                  </div>
                </div> :
                <div className='user'>
                  <div className='icon'>
                    <FiLogIn />
                  </div>
                  <div className='btn'>
                    <button onClick={() => loginWithRedirect()}>Sign In</button>
                  </div>
                </div>
              }
              
            </div>
        </div>
      </div>
    </>
  )
}

export default Nav
