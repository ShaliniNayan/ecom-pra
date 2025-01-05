import React from 'react'
import './nav.css'
import {  FaHeadphonesAlt, FaPiggyBank, FaShippingFast, FaWallet } from 'react-icons/fa'

const Footer = () => {
  return (
	<>
		<div className="footer w-full p-8 bg-[#f6f7f8]">
			<div className='container flex font-semibold max-w-full'>
				<div className="left-box w-1/3 p-5 border-r-2 border-[#b8b7b7]">
					<div className='box flex'>
						<div className="icon_box">
							<FaPiggyBank />
						</div>
						<div classNmae="detail">
							<h3>Great value for your money</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</div>
					</div>
					<div className='box flex'>
						<div className="icon_box">
							<FaShippingFast />
						</div>
						<div classNmae="detail">
							<h3>Free shipping </h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</div>
					</div>
					<div className='box flex'>
						<div className="icon_box">
							<FaHeadphonesAlt />
						</div>
						<div classNmae="detail">
							<h3>24X7 Support</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</div>
					</div>
					<div className='box flex'>
						<div className="icon_box">
							<FaWallet />
						</div>
						<div classNmae="detail">
							<h3>Money back</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</>
  )
}

export default Footer
