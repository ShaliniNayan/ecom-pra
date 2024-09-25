import React from 'react'
import { MdLocalShipping } from 'react-icons/md'
import './nav.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'
import { CiLogout, CiUser } from 'react-icons/ci'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'

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
                //  If user is login then logout button will show and also user profile
                <div className='user'>
                  <div className='icon'>
                    <CiLogout />
                    <img src={user.picture} alt='user' />
                  </div>
                  <div className='btn'>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                  </div>
                </div> :
                // if user is not login then login button will show
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
            <div className='bottom_header'>
              <div className='menu'>
                {
                  // User profile will show if user is login
                  isAuthenticated ?
                  <>
                  <CiUser />
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                  </>
                  :
                  <>
                  <div className='icon'>
                    <CiUser />
                  </div>
                  {/* <div className='info'>
                    <p>Please Sign In</p>
                  </div> */}
                  </>
                }
              </div>
              <div className='nav'>
                <ul>
                  <li><Link to='/' className='link'>Home</Link></li>
                  <li><Link to='/shop' className='link'>Shop</Link></li>
                  <li><Link to='/cart' className='link'>cart</Link></li>
                  <li><Link to='/about' className='link'>About</Link></li>
                  <li><Link to='/contact' className='link'>Contact</Link></li>
                </ul>
              </div>
              <div className='discount'>
                <p>Flat 10% OFF on first order</p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Nav
