import React from 'react';

const Home = () => {
  return (
    <div className="w-full">
      <div 
        className="w-full h-[500px] bg-cover bg-no-repeat" 
        style={{ backgroundImage: "url('http://localhost:3000/image/slide-1.webp')" }}
      >
        {/* Add any content inside the banner here */}
      </div>
    </div>
  );
};

export default Home;
