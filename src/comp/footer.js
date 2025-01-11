import React from 'react';
import './nav.css';
import {  FaHeadphonesAlt, FaPiggyBank, FaShippingFast, FaWallet } from 'react-icons/fa';

const Footer = () => {
  return (
	<>
		<div className="footer w-full p-8 bg-[#f6f7f8]">
			<div className='container flex font-semibold max-w-full'>
				<div className="left-box w-1/3 p-5 border-r-2 border-[#b8b7b7]">
					<div className='box flex px-[10px] py-[20px] mt-[15px] gap-4'>
						<div className="icon_box text-[26px] text-[#cd1e76]">
							<FaPiggyBank />
						</div>
						<div className="detail ml-[10px]">
							<h3 className="uppercase text-base text-[#cd1e76] font-semibold tracking-wider">Great price</h3>
							<p className="text-sm text-[#232323]">Lorem ipsum dolor sit elit.</p>
						</div>
					</div>
					<div className='box flex px-[10px] py-[20px] mt-[15px] gap-4'>
						<div className="icon_box text-[26px] text-[#cd1e76]">
							<FaShippingFast />
						</div>
						<div className="detail ml-[10px]">
							<h3 className="uppercase text-base text-[#cd1e76] font-semibold tracking-wider">Free shipping </h3>
							<p className="text-sm text-[#232323]">Lorem ipsum dolor sit elit.</p>
						</div>
					</div>
					<div className='box flex px-[10px] py-[20px] mt-[15px] gap-4'>
						<div className="icon_box text-[26px] text-[#cd1e76]">
							<FaHeadphonesAlt />
						</div>
						<div className="detail ml-[10px]">
							<h3 className="uppercase text-base text-[#cd1e76] font-semibold tracking-wider">24X7 Support</h3>
							<p className="text-sm text-[#232323]">Lorem ipsum dolor sit elit.</p>
						</div>
					</div>
					<div className='box flex px-[10px] py-[20px] mt-[15px] gap-4'>
						<div className="icon_box text-[26px] text-[#cd1e76]">
							<FaWallet />
						</div>
						<div className="detail ml-[10px]">
							<h3 className="uppercase text-base text-[#cd1e76] font-semibold tracking-wider">Money back</h3>
							<p className="text-sm text-[#232323]">Lorem ipsum dolor sit elit.</p>
						</div>
					</div>
				</div>

				<div className="right-box w-[69%] p-5">
					<div className="header max-w-full items-center">
						<img src="image/logo.webp" alt="logo" className="ml-[40%]" />
						<p className="mt-4 text-sm text-center font-semibold text-gray-500">Lorem ipsum dolor sit elit.</p>
					</div>
					<div className="bottom flex mt-[20px] w-full justify-between px-[20px] py-[20px]">
						<div className="box px-[10px] py-[20px]">
							<h3 className="font-semibold uppercase text-[#232323] text-sm tracking-wider">Your Account</h3>
							<ul className="mt-[10px]">
								<li className="list-none mt-1 text-[#8a8a8a] capitalize tracking-wider text-xs cursor-pointer transition duration-500 hover:text-[#cd1e76]">About Us</li>
								<li className="list-none mt-1 text-[#8a8a8a] capitalize tracking-wider text-xs cursor-pointer transition duration-500 hover:text-[#cd1e76]">Account</li>
								<li className="list-none mt-1 text-[#8a8a8a] capitalize tracking-wider text-xs cursor-pointer transition duration-500 hover:text-[#cd1e76]">Payment</li>
								<li className="list-none mt-1 text-[#8a8a8a] capitalize tracking-wider text-xs cursor-pointer transition duration-500 hover:text-[#cd1e76]">Sales</li>
							</ul>
						</div>
						<div className="box px-[10px] py-[20px]">
							<h3 className="font-semibold uppercase text-[#232323] text-sm tracking-wider">Products</h3>
							<ul className="mt-[10px]">
								<li className="list-none mt-1 text-[#8a8a8a] capitalize tracking-wider text-xs cursor-pointer transition duration-500 hover:text-[#cd1e76]">Delivery</li>
								<li className="list-none mt-1 text-[#8a8a8a] capitalize tracking-wider text-xs cursor-pointer transition duration-500 hover:text-[#cd1e76]">Track Order</li>
								<li className="list-none mt-1 text-[#8a8a8a] capitalize tracking-wider text-xs cursor-pointer transition duration-500 hover:text-[#cd1e76]">New Products</li>
								<li className="list-none mt-1 text-[#8a8a8a] capitalize tracking-wider text-xs cursor-pointer transition duration-500 hover:text-[#cd1e76]">Old Products</li>
							</ul>
						</div>
						<div className="box px-[10px] py-[20px]">
							<h3 className="font-semibold uppercase text-[#232323] text-sm tracking-wider">Contact Us</h3>
							<ul className="mt-[10px]">
								<li className="list-none mt-1 text-[#8a8a8a] capitalize tracking-wider text-xs cursor-pointer transition duration-500 hover:text-[#cd1e76]">123, Business Lane</li>
								<li className="list-none mt-1 text-[#8a8a8a] capitalize tracking-wider text-xs cursor-pointer transition duration-500 hover:text-[#cd1e76]">+(91) 1234567890</li>
								<li className="list-none mt-1 text-[#8a8a8a] capitalize tracking-wider text-xs cursor-pointer transition duration-500 hover:text-[#cd1e76]">info@domain.com</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
  )
}

export default Footer
