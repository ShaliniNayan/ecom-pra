import React from "react";
import './nav.css';
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({cart, setCart}) => {

    // Increment Qunatity of Cart Product
    const incqty = (product) => 
        {
            const exit = cart.find((x) => {
                return x.id === product.id;
            })
            setCart(cart.map((curElm) => {
                return curElm.id === product.id ? {...exit, qty: exit.qty + 1} : curElm
            }))
        };
    // Decrement Qunatity of Cart Product
    const decqty = (product) => 
        {
            const exit = cart.find((x) => {
                return x.id === product.id;
            })
            setCart(cart.map((curElm) => {
                return curElm.id === product.id ? {...exit, qty: exit.qty - 1} : curElm
            }))
        };

    // Remove Product from Cart
    const removeproduct = (product) => {                
        const exit = cart.find((x) => {
            return x.id === product.id; 
        })
        if(exit.qty > 0) {
            setCart(cart.filter((curElm) => {
                return curElm.id !== product.id
            }));
        }
    }

    // Total Price of Cart Product
    const total = cart.reduce((price, item) => price + item.qty * item.price, 0)

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
                                <div className="detail flex w-full mt-[10px] ml-[30px]">
                                    <div className="info mt-[40px] ml-[60px]">
                                        <h4 className="uppercase font-semibold text-sm text-[#8a8a8a]">{curElm.cat}</h4>
                                        <h3 className="uppercase font-semibold text-xl text-[#232323] tracking-[1px]">{curElm.Name}</h3>
                                        <p className="mt-[10px] text-sm text-[#232323] uppercase">Price : ₹{curElm.price}</p>
                                        <p className="mt-[10px] text-sm text-[#232323] uppercase">Total: ₹{curElm.qty * curElm.price}</p>
                                    </div>
                                    <div className="quantity mt-[65px] ml-[70px] flex">
                                        <button onClick={() => incqty(curElm)}
                                        className="px-[10px] py-[10px] text-[#232323] border-0 outline-none bg-[#fed700] font-semibold h-[40px] text-base cursor-pointer">+</button>
                                        <input type="number" className="h-[40px] px-[10px] py-[10px] bg-transparent border-0 outline-none border-2 border-[#fed700] text-[#cd1e76] text-sm font-semibold w-[90px]" value={curElm.qty} />
                                        <button onClick={() => decqty(curElm)}
                                        className="px-[10px] py-[10px] text-[#232323] border-0 outline-none bg-[#fed700] font-semibold h-[40px] text-base cursor-pointer">-</button>
                                    </div>
                                    <div className="icon mt-[65px] ml-[60px]">
                                        <li className="cursor-pointer list-none bg-[#cd1e76] px-[10px] py-[10px] text-[#fff] text-sm font-semibold"
                                         onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="bottom">
                {
                    cart.length > 0 && 
                    <>
                    <div className="Total">
                        <h4 className="text-base text-[#cd1e76] uppercase font-semibold">Total : ₹{total}</h4>
                    </div>
                    </>
                }
            </div>
        </div>
       </>
    );
};

export default Cart;