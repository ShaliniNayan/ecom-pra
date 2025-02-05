import React from "react";
import './nav.css';

const Cart = ({cart}) => {
    return (
       <>
        <div className="cart w-full px-[20px] py-[30px]">
            <h3 className="text-2xl uppercase text-[#232323] tracking-[1px] font-semibold">#cart</h3>
            {
                cart.length === 0 && 
                <>
                <div className="empty_cart">
                    <h2>Your Cart is Empty</h2>
                    <button>Shop Now</button>
                </div>
                </>
            }
            <div className="conatiner"></div>
        </div>
       </>
    );
};

export default Cart;