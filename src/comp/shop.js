import React from "react";
import './nav.css';

const Shop = () => {
    return (
        <>
            <div className="shop w-[100px] px-8 py-5">
                <h2 className="whitespace-nowrap uppercase tracking-wider text-[#232323] text-2xl font-semibold">
                    # shop
                </h2>
                <p className="whitespace-nowrap mt-1 text-[#8a8a8a] text-sm font-semibold">Home  shop</p>
                <div className="container w-full flex mt-[20px]">
                    <div className="left_box w-[25%] flex">
                        <div className="category border-[3px] border-[#f6f6f6] w-full">
                            <div className="header flex">
                                <h2 className="flex font-semibold whitespace-nowrap uppercase text-[#232323] text-2xl">All Categories</h2>
                            </div>
                            <div className="box">
                                <ul className="list-disc pl-5 space-y-2">
                                    <li className="whitespace-nowrap"># tv</li>
                                    <li className="whitespace-nowrap"># laptop</li>
                                    <li className="whitespace-nowrap"># watch</li>
                                    <li className="whitespace-nowrap"># speaker</li>
                                    <li className="whitespace-nowrap"># electronics</li>
                                    <li className="whitespace-nowrap"># headphone</li>
                                    <li className="whitespace-nowrap"># phone</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;