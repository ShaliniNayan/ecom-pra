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
					<div className="bottom">
						<div className="box">
							<h3>Your Account</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
  )
}

export default Footer
