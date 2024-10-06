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
        <h3>Silver Aluminum</h3>
        <h2>Apple Watch</h2>
        <p>30% OFF</p>
        <Link to='/shop' className="w-full relative p-[10px_50px]" style={{top: '20%'}}>Shop Now</Link>
      </div>
    </div>
  );
};

export default Home;
