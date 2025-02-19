import React, { useState } from "react";
import './nav.css';
import { AiFillEye, AiFillHeart, AiOutlineClose } from "react-icons/ai";

const Shop = ({shop, Filter, allcatefilter, addtocart}) => {
    // Tongle Product Detail
    const [showDetail, setShowDetail] = useState(false);

    // Showing Detail Box
    const detailpage = () =>
    {
        setShowDetail(true);
    }
    return (
        <>
        {
            showDetail ?
            <>
            <div 
                className="product_detail w-[900px] h-[500px] fixed top-[100px] left-[170px] bg-[#ffffff] shadow-md border border-[#f6f6f6] rounded-md px-[30px] py-[20px]">
                <button><AiOutlineClose /></button>
            </div>
            </>
            : null
        }
        <>
        
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
                                <li onClick={() => allcatefilter ('')} 
                                className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer transition duration-500 hover:text-gray-900"># All</li>
                                <li onClick={() => Filter ('tv')} 
                                className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer transition duration-500 hover:text-gray-900"># TV</li>
                                <li onClick={() => Filter ('laptop')} 
                                className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer transition duration-500 hover:text-gray-900"># Laptop</li>
                                <li onClick={() => Filter ('watch')} 
                                className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer transition duration-500 hover:text-gray-900"># Watch</li>
                                <li onClick={() => Filter ('speaker')} 
                                className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer transition duration-500 hover:text-gray-900"># Speaker</li>
                                <li onClick={() => Filter ('electronics')} 
                                className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer transition duration-500 hover:text-gray-900"># Electronics</li>
                                <li onClick={() => Filter ('headphone')} 
                                className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer transition duration-500 hover:text-gray-900"># Headphone</li>
                                <li onClick={() => Filter ('phone')} 
                                className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer transition duration-500 hover:text-gray-900"># Phone</li>
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
                                        <div className="box group px-[10px] py-[10px] w-[270px] h-[385px] overflow-hidden border-2 border-[#f6f6f6] ml-4 mt-5">
                                            <div className="img_box relative flex">
                                                <img className="w-full h-[240px]" 
                                                    src={curElm.image} alt="" 
                                                />
                                                                                                
                                                <div className="icon absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 opacity-0 transition-all duration-300 ease-in-out translate-x-full group-hover:translate-x-0 group-hover:opacity-100">
                                                    <li className="list-none shadow-lg p-2.5 text-gray-500 bg-white cursor-pointer transition-all duration-300 hover:text-white hover:bg-[#cd1e76] hover:scale-110"><AiFillHeart/></li>
                                                    <li onClick={detailpage} 
                                                    className="list-none shadow-lg p-2.5 text-gray-500 bg-white cursor-pointer transition-all duration-300 hover:text-white hover:bg-[#cd1e76] hover:scale-110"><AiFillEye/></li>
                                                </div>
                                            </div>
                                            <div className="detail mt-2.5 w-full">
                                                <h3 className="text-center text-[#232323] text-lg font-semibold capitalize">{curElm.Name}</h3>
                                                <p className="mt-[5px] text-center text-[#cd1e76] text-base">₹ {curElm.price}</p>
                                                <button onClick={() => addtocart(curElm)}
                                                className="mt-2 ml-[30%] px-4 py-2 border-0 outline-none text-[#232323] bg-[#fed700] font-semibold cursor-pointer transition-all duration-300 hover:bg-[#232323] hover:text-[#fed700]">Add To Cart</button>
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
        </>        
        </>
    );
};

export default Shop;
