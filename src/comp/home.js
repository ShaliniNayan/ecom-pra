import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import Homeproduct from './home_product';
import { AiFillEye, AiFillHeart } from "react-icons/ai";

const Home = () => {
  const [trendingProduct] = useState(Homeproduct);
  return (
    <>
      <div className="w-full">
        <div 
          className="w-full h-[395px] p-[50px_60px] bg-cover bg-no-repeat" 
          style={{ backgroundImage: "url('http://localhost:3000/image/slide-1.webp')" }}
        >
          <div className="w-full relative p-[10px_50px]" style={{ top: '20%' }}>
            <h3 className="capitalize text-[#cd1e76] font-semibold tracking-wider">Silver Aluminum</h3>
            <h2 className="uppercase text-[#232323] font-semibold tracking-wider text-[42px] mt-2.5">Apple Watch</h2>
            <p className="text-[#232323] tracking-wider mt-2.5 mb-4">30% OFF on Your First Purchase</p>
            <Link
              to='/shop'
              className="inline-block px-8 py-3 bg-[#fed700] text-[#232323] no-underline rounded-md transition duration-500 hover:text-[#fed700] hover:bg-[#cd1e76] mt-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="px-7.5 py-5 w-full">
          <div className="max-w-full flex">
            <div className="px-5 py-2.5 w-3/4">
              <div className="flex max-w-full p-2.5 bg-[#f6f7f8] justify-between">
                <div className='heading'>
                  <h2 className="uppercase text-[16px] text-[#232323] mt-5">Trending Products</h2>
                </div>
                <div className="flex mt-5">
                  <h3 className="capitalize mr-5 text-[#232323] text-[14px] cursor-pointer transition duration-500 hover:text-[#cd1e76]">New</h3>
                  <h3 className="capitalize mr-5 text-[#232323] text-[14px] cursor-pointer transition duration-500 hover:text-[#cd1e76]">Featured</h3>
                  <h3 className="capitalize mr-5 text-[#232323] text-[14px] cursor-pointer transition duration-500 hover:text-[#cd1e76]">Best Selling</h3>
                </div>
              </div>
              <div className="max-w-full">
                <div className="flex flex-wrap w-full">
                  {trendingProduct.map((curElem) => (
                    <div key={curElem.id} className="w-[195px] h-[295px] p-2.5 border-[4px] border-[#f6f7f8] mt-5 ml-5 bg-[#f6f7f8] overflow-hidden rounded-md relative group">
                      <div className="w-[190px] h-[190px] relative overflow-hidden">
                        <img src={curElem.image} alt={curElem.name} className="w-full h-full object-cover" />
                        <div className="icon absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="icon_box mb-2 p-2.5 shadow-md bg-white text-[#cd1e76] rounded-full transition duration-500 hover:text-white hover:bg-[#cd1e76]">
                            <AiFillEye size={20} />
                          </div>
                          <div className="icon_box p-2.5 shadow-md bg-white text-[#cd1e76] rounded-full transition duration-500 hover:text-white hover:bg-[#cd1e76]">
                            <AiFillHeart size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='right_box'>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
