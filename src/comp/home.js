import React, { useState } from 'react';
import './nav.css'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product';
import { AiFillEye, AiFillHeart } from "react-icons/ai";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
  return (
    <>
      <div className="w-full">
        <div 
          className="w-full h-[395px] p-[50px_60px] bg-cover bg-no-repeat" 
          style={{ backgroundImage: "url('http://localhost:3000/image/slide-1.webp')" }}
        >
          <div className="w-full relative p-[10px_50px]" style={{top: '20%'}}>
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
                  <h2 className="uppercase text-[16px] text-[#232323] mt-5">Treanding Products</h2>
                </div>
                <div className="flex mt-5">
                  <h3 className="captialize mr-5 text-[#232323] text-[14px] cursor-pointer transition duration-500 hover:text-[#cd1e76] hover:text-[#cd1e76]">New</h3>
                  <h3 className="captialize mr-5 text-[#232323] text-[14px] cursor-pointer transition duration-500 hover:text-[#cd1e76] hover:text-[#cd1e76]">Featured</h3>
                  <h3 className="captialize mr-5 text-[#232323] text-[14px] cursor-pointer transition duration-500 hover:text-[#cd1e76] hover:text-[#cd1e76]">Best Selling</h3>
                </div>
              </div>
              <div className='max-w-full'>
                <div className="flex flex-wrap">
                  {trendingProduct.map((curElem) => {
                    return (
                      <>
                        <div key={curElem.id} className="w-[195px] h-[295px] p-2.5 border-[4px] border-[#f6f7f8] 
                          mt-5 ml-5 bg-[#f6f7f8] overflow-hidden rounded-md">
                          <div className="w-[190px] h-[190px] object-cover">
                            <img src={curElem.image} alt='' />
                            <div className='icon flex flex-'>
                              <div className='icon_box'>
                                <AiFillEye />
                              </div>
                              <div className='icon_box'>
                                <AiFillHeart />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>

            </div>
            <div className='right_box'>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;