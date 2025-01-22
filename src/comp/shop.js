import React from "react";
import './nav.css';

const Shop = () => {
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
                                <li className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer"># TV</li>
                                <li className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer"># Laptop</li>
                                <li className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer"># Watch</li>
                                <li className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer"># Speaker</li>
                                <li className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer"># Electronics</li>
                                <li className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer"># Headphone</li>
                                <li className="list-none ml-2 uppercase mt-1 text-sm font-semibold text-[#8a8a8a] tracking-wider cursor-pointer"># Phone</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
