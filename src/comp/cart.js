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
            <div className="conatiner w-full px-[10px] py-[20px] ">
                {
                    cart.map((curElm)=>{
                        return(
                            <>
                            <div className="box flex w-full border-2 border-[#f6f6f6] h-[250px] mt-[10px]">
                                <div className="img_box w-[270px] h-[100%] ">
                                    <img src={curElm.image} alt="" />
                                </div>
                                <div className="detail">
                                    <div className="info">
                                        <h4 className="uppercase font-semibold">{curElm.cat}</h4>
                                        <h4 className="uppercase font-semibold">{curElm.Name}</h4>
                                        <p>Price : ₹{curElm.price}</p>
                                        <p>Total: ₹{curElm.qty * curElm.price}</p>
                                    </div>
                                    <div className="quantity">
                                        <button className="">+</button>
                                        <input type="number" value={curElm.qty} className="num" />
                                        <button className="">-</button>
                                    </div>
                                    
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