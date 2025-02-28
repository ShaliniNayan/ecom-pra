import React from "react";
import './nav.css';

const Contact = () => {
    return (
        <>
        <div className="contact px-[40px] py-[20px] w-full">
            <div className="conatiner py-[20px] px-[10px] w-max-full">
                <div className="form w-[400px] bg-[#f6f6f6] py-[30px] px-[20px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] mx-auto border-t-[3px] border-[#fed700] rounded-[5px]">
                    <h2 className="text-[#cd1e76] uppercase font-semibold text-lg tracking-wide"># contact us</h2>
                    <form method="POST">
                        <div className="box flex mt-[20px] justify-between">
                            <div className="label">
                                <h4 className="ml-[30px] text-[#232323] text-sm font-semibold">Name</h4>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Enter your name" value="" name="" />
                            </div>
                        </div>
                        <div className="box flex mt-[20px] justify-between">
                            <div className="label">
                                <h4 className="ml-[30px] text-[#232323] text-sm font-semibold">Email</h4>
                            </div>
                            <div className="input">
                                <input type="email" placeholder="Enter your email" value="" name="" />
                            </div>
                        </div>
                        <div className="box flex mt-[20px] justify-between">
                            <div className="label">
                                <h4 className="ml-[30px] text-[#232323] text-sm font-semibold">Subject</h4>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Enter your subject" value="" name="" />
                            </div>
                        </div>
                        <div className="box flex mt-[20px] justify-between">
                            <div className="label">
                                <h4 className="ml-[30px] text-[#232323] text-sm font-semibold">Message</h4>    
                            </div>
                            <div className="input">
                                <textarea placeholder="Enter your message !" value="" name=""></textarea>
                            </div>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;
