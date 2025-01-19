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
                    <div className="category border-2 border-[#f6f6f6] w-full">
                        {/* Category Header */}
                        <div className="header flex px-5 py-3 bg-[#f6f6f6]">
                            <h3 className="font-semibold uppercase text-[#232323] text-lg text-center">
                                All Categories
                            </h3>
                        </div>
                        
                        <div className="box">                            
                            {/* Category List */}
                            <ul className="list-disc pl-5 py-4 space-y-2 text-[#232323]">
                                <li># TV</li>
                                <li># Laptop</li>
                                <li># Watch</li>
                                <li># Speaker</li>
                                <li># Electronics</li>
                                <li># Headphone</li>
                                <li># Phone</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
