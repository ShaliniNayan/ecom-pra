import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
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
    </div>
  );
};

export default Home;
