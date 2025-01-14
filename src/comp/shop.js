import React from "react";
import './nav.css';

const Shop = () => {
    return (
        <>
            <div className="shop w-[100px] px-8 py-5">
                <div className="container w-full flex">
                    <div className="left_box w-[30%] flex">
                        <div className="category">
                            <div className="header flex">
                                <h2 className="flex font-semibold">All Categories</h2>
                            </div>
                            <div className="box">
                                <ul>
                                    <li># tv</li>
                                    <li># laptop</li>
                                    <li># watch</li>
                                    <li># speaker</li>
                                    <li># electronics</li>
                                    <li># headphone</li>
                                    <li># phone</li>
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