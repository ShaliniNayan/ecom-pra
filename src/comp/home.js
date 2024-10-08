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
          <p >30% OFF</p>
          <Link to='/shop'>Shop Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
