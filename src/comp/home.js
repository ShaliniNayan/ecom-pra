import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import Homeproduct from './home_product';
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);

  const filtercate = (x) => {
    const filteredProducts = Homeproduct.filter((curElm) => curElm.type === x);
    setTrendingProduct(filteredProducts);
  };
  
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct);
  };

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
                  <h2 className="cursor-pointer uppercase text-[16px] text-[#232323] mt-5 font-semibold" onClick={() => allTrendingProduct()}>Trending Products</h2>
                </div>
                <div className="flex mt-5">
                  <h3 className="capitalize mr-5 text-[#232323] text-[14px] cursor-pointer transition duration-500 hover:text-[#cd1e76] font-semibold" onClick={() => filtercate  ('new')}>New</h3>
                  <h3 className="capitalize mr-5 text-[#232323] text-[14px] cursor-pointer transition duration-500 hover:text-[#cd1e76] font-semibold" onClick={() => filtercate ('featured')}>Featured</h3>
                  <h3 className="capitalize mr-5 text-[#232323] text-[14px] cursor-pointer transition duration-500 hover:text-[#cd1e76] font-semibold" onClick={() => filtercate ('top')}>Best Selling</h3>
                </div>
              </div>
              <div className="max-w-full">
                <div className="flex flex-wrap w-full">
                  {trendingProduct.map((curElem) => (
                    <div key={curElem.id} className="w-[195px] h-[330px] p-2.5 border-[4px] border-[#f6f7f8] mt-5 ml-5 bg-[#f6f7f8] overflow-hidden rounded-md relative group">
                      <div className="w-[190px] h-[190px] relative overflow-hidden">
                        <img src={curElem.image} alt={curElem.name} className="w-full h-full object-cover" />
                        <div className="icon absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="icon_box mb-2 p-2.5 shadow-md bg-white text-[#cd1e76] rounded-full transition duration-500 hover:text-white hover:bg-[#cd1e76] cursor-pointer">
                            <AiFillEye size={20} />
                          </div>
                          <div className="icon_box p-2.5 shadow-md bg-white text-[#cd1e76] rounded-full transition duration-500 hover:text-white hover:bg-[#cd1e76] cursor-pointer">
                            <AiFillHeart size={20} />
                          </div>
                        </div>
                      </div>
                      <div className='info p-[10px] ml-[10px]'>
                        <h3 className="uppercase text-[14px] text-[#232323] font-light tracking-[1px]">{curElem.Name}</h3>
                        <p className="text-[#cd1e76] mt-2 text-[14px] tracking-[1px]">₹{curElem.price}</p>
                        <button className="mt-3 px-4 py-2 bg-[#fed700] text-[#232323] capitalize rounded-md transition duration-500 hover:bg-[#cd1e76] hover:text-white">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='right_box font-semibold p-[10px] px-[20px] w-[24%] flex flex-col'>
              <div className='right_container max-w-full flex flex-col'>
                <div className='testimonial w-[100%] border-4 border-[#f6f7f8]'>
                  <div className='head px-[10px] py-[10px] w-[100%] bg-#f6f7f8'>
                    <h3 className="text-center text-[#232323] text-[16px] uppercase mt-[10px] tracking-[1px]">Our Testimonial</h3>
                  </div>
                  <div className='detail px-[10px] py-[20px]'>
                    <div className='img_box'>
                      <img className='ml-[50px] mt-[40px]' src='image/T1.avif' alt='testimonial'></img>
                    </div>
                    <div className='info mt-[10px]'>
                      <h3 className="text-center text-[#232323] text-[14px] uppercase">Emmanual Musangranfa</h3>
                      <h4 className="text-center text-[12px] mt-[10px] text-[#cd1e76] font-light uppercase font-semibold">Web Designer</h4>
                      <p className="text-center font-semibold text-[#232323] text-[14px] mb-[20px]">lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div> 
                <div className='newsletter '>
                <div className='head px-[10px] py-[10px] w-[100%] bg-#f6f7f8'>
                    <h3 className="text-center text-[#232323] text-[16px] uppercase mt-[10px] tracking-[1px]">Newsletter</h3>
                  </div>
                  <div className='form'>
                    <p>Subscribe to our newsletter to stay updated on our latest offers and news.</p>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      autoComplete='off'
                      className="w-[80%] p-2 border border-[#cd1e76] rounded-md mb-[10px]" 
                    />
                    <button 
                      type="submit" 
                      className="px-4 py-2 bg-[#fed700] text-[#232323] rounded-md transition hover:bg-[#cd1e76] hover:text-white">
                      Subscribe
                    </button>
                    <div className='icon_box'>
                      <div className='icon'>
                        <BiLogoTwitter />
                      </div>
                      <div className='icon'>
                        <BiLogoLinkedin />
                      </div>
                      <div className='icon'>
                        <BiLogoGithub />
                      </div>
                    </div>
                  </div>
                </div>           
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
