import React from "react";
import './nav.css';

const Shop = () => {
    return (
        <>
            <div className="shop w-[100px] px-8 py-5">
                <h2 className="whitespace-nowrap"># shop</h2>
                <p className="whitespace-nowrap">Home . shop</p>
                <div className="container w-full flex">
                    <div className="left_box w-[30%] flex">
                        <div className="category">
                            <div className="header flex">
                                <h2 className="flex font-semibold whitespace-nowrap">All Categories</h2>
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