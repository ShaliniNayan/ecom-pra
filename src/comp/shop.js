import React from "react";
import './nav.css';
import { AiFillEye, AiFillHeart } from "react-icons/ai";

const Shop = ({shop}) => {
    return (
        <div className="shop w-full px-8 py-5">
            {/* Shop Header */}
            <h2 className="whitespace-nowrap uppercase tracking-wider text-[#232323] text-2xl font-semibold">
                # shop
            </h2>
            <p className="mt-1 text-[#8a8a8a] text-sm font-semibold">
                Home Shop
            </p>

            {/* Main Content */}
            <div className="container w-full flex mt-8">
                {/* Left Box */}
                <div className="left_box w-1/4">
                    <div className="category border-2 border-[#f6f6f6] w-[250px]">
                        {/* Category Header */}
                        <div className="header flex px-5 py-3 bg-[#f6f6f6]">
                            <h3 className="font-semibold uppercase text-[#232323] text-lg text-center">
                                All Categories
                            </h3>
                        </div>
                        
                        <div className="box mt-2 w-full px-[10px] py-[20px]">                            
                            {/* Category List */}
                            <ul className="max-w-full">
                                <li className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer transition duration-500 hover:text-gray-900"># TV</li>
                                <li className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer transition duration-500 hover:text-gray-900"># Laptop</li>
                                <li className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer transition duration-500 hover:text-gray-900"># Watch</li>
                                <li className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer transition duration-500 hover:text-gray-900"># Speaker</li>
                                <li className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer transition duration-500 hover:text-gray-900"># Electronics</li>
                                <li className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer transition duration-500 hover:text-gray-900"># Headphone</li>
                                <li className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer transition duration-500 hover:text-gray-900"># Phone</li>
                            </ul>
                        </div>
                    </div>

                    {/* Banner */}
                    <div className="banner mt-4 w-[250px]">
                        <div className="img_box">
                            <img src="image/shop_left.avif" alt="" className="w-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Right Box */}
                <div className="right_box w-3/4">
                    <div className="banner w-full">
                        <div className="img_box">
                            <img src="image/shop_top.webp" alt="" className="w-full object-cover" />
                        </div>
                    </div>
                    <div className="product_box max-w-full px-5 py-5">
                        <h2 className="text-gray-600 uppercase tracking-wider text-xl mt-2.5">Shop Product</h2>
                        <div className="product_container w-full flex flex-wrap justify-between">
                            {
                                shop.map((curElm) => {
                                    return(
                                        <>
                                        <div className="box px-[10px] py-[10px] w-[270px] h-[390px] overflow-hidden border-2 border-[#f6f6f6] ml-4 mt-5">
                                            <div className="img_box flex">
                                                <img className="w-full h-[270px]" 
                                                    src={curElm.image} alt="" 
                                                />
                                                <div className="icon flex flex-col p-5 mt-[10px] ml-[40px] transition duration-500 hover:ml-[-20px]">
                                                    <li className="list-none shadow-md px-2.5 py-2.5 mt-2.5 text-gray-500 bg-white cursor-pointer transition duration-500 hover:text-white hover:bg-[#cd1e76]"><AiFillHeart/></li>
                                                    <li className="list-none shadow-md px-2.5 py-2.5 mt-2.5 text-gray-500 bg-white cursor-pointer transition duration-500 hover:text-white hover:bg-[#cd1e76]"><AiFillEye/></li>
                                                </div>
                                            </div>
                                            <div className="detail mt-2.5 w-full">
                                                <h3 className="text-center text-[#232323] text-base font-semibold">{curElm.Name}</h3>
                                                <p>{curElm.price}</p>
                                                <button>Add To Cart</button>
                                            </div>
                                        </div>
                                        </>
                                    )
                                })                                    
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
