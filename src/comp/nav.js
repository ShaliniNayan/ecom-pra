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
      <div className="w-full">
        {/* Top Header */}
        <div className="flex p-2 bg-gray-100">
          <div className="ml-5 text-gray-400 text-lg">
            <MdLocalShipping />
          </div>
          <div className="ml-2 text-gray-500">
            <p>Free Shipping When Shopping Upto ₹499</p>
          </div>
        </div>

        {/* Mid Header */}
        <div className="flex justify-between p-5">
          {/* Logo */}
          <div className="cursor-pointer">
            <img src="image/logo.webp" alt="logo" className="object-cover" />
          </div>

          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="p-2 border border-gray-400 rounded-l-md w-64 outline-none"
            />
            <button className="p-2 ml-2 bg-pink-600 text-white rounded-r-md border border-pink-600 hover:bg-yellow-400 hover:text-pink-600 transition duration-500 font-semibold">
              <AiOutlineSearch />
            </button>
          </div>

          {/* User Authentication */}
          {isAuthenticated ? (
            <div className="flex items-center mr-8">
              <div className="mr-3">
                <CiLogout />
                <img src={user.picture} alt="user" className="w-8 h-8 rounded-full" />
              </div>
              <div>
                <button
                  className="text-lg bg-none cursor-pointer"
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center mr-8">
              <div className="mr-3">
                <FiLogIn />
              </div>
              <div>
                <button className="text-lg bg-none cursor-pointer" onClick={() => loginWithRedirect()}>
                  Sign In
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Header */}
        <div className="flex justify-between items-center p-2 bg-gray-900">
          {/* Profile Info */}
          <div className="flex items-center">
            {isAuthenticated ? (
              <>
                <div className="bg-white p-2.5 rounded-full flex items-center justify-center">
                  <CiUser className="text-black text-3xl" /> {/* Icon size and color */}
                </div>
                <div className="ml-3 text-white">
                  <h2 className="text-lg">{user.name}</h2>
                  <p className="text-gray-400 text-sm">{user.email}</p>
                </div>
              </>
            ) : (
              <>
                <CiUser className="text-white text-xl" />
                <div className="ml-3 text-white">
                  <p>Please Sign In</p>
                </div>
              </>
            )}
          </div>

          {/* Navigation Links */}
          <div className="mt-15">
            <ul className="flex">
              <li className="ml-4">
                <Link to="/" className="mr-5 text-white font-extrabold no-underline transition duration-500 hover:text-[#fed700]">
                  Home
                </Link>
              </li>
              <li className="ml-4">
                <Link to="/shop" className="mr-5 text-white font-extrabold no-underline transition duration-500 hover:text-[#fed700]">
                  Shop
                </Link>
              </li>
              <li className="ml-4">
                <Link to="/cart" className="mr-5 text-white font-extrabold no-underline transition duration-500 hover:text-[#fed700]">
                  Cart
                </Link>
              </li>
              <li className="ml-4">
                <Link to="/about" className="mr-5 text-white font-extrabold no-underline transition duration-500 hover:text-[#fed700]">
                  About
                </Link>
              </li>
              <li className="ml-4">
                <Link to="/contact" className="mr-5 text-white font-extrabold no-underline transition duration-500 hover:text-[#fed700]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Discount Info */}
          <div className="mr-5 py-2.5 px-5 bg-[#fed700] rounded-lg text-white">
            <p>Flat 10% OFF on first order</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav;
