import React from 'react';

const Home = () => {
  return (
    <div className="w-full">
      <div 
        className="w-full h-[395px] bg-cover bg-no-repeat" 
        style={{ backgroundImage: "url('http://localhost:3000/image/slide-1.webp')" }}
      >
        <h3>Silver Aluminum</h3>
        <h2>Apple Watch</h2>
        <p>30% OFF For Purchase above ₹499</p>
      </div>
    </div>
  );
};

export default Home;
