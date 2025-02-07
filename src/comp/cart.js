import React from "react";
import './nav.css';
import { Link } from "react-router-dom";

const Cart = ({cart}) => {
    return (
       <>
        <div className="cart w-full px-[20px] py-[30px]">
            <h3 className="text-2xl uppercase text-[#232323] tracking-[1px] font-semibold">#cart</h3>
            {
                cart.length === 0 && 
                <>
                <div className="empty_cart w-full items-center font-semibold">
                    <h2 className="text-center uppercase text-lg text-[#232323] tracking-[1px] font-semibold">Your Cart is Empty</h2>
                    <Link to='/shop'>
                    <button className="cursor-pointer ml-[45%] px-4 py-2 mt-2 bg-[#fed700] text-[#cd1e76] border-0 outline-none border border-[#fed700] font-semibold">Shop Now</button>
                    </Link>
                </div>
                </>
            }
            <div className="conatiner">
                {
                    cart.map((curElm)=>{
                        return(
                            <>
                            <div className="box">
                                <div className="img_box">
                                    <img src={curElm.image} alt="" />
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
       </>
    );
};

export default Cart;