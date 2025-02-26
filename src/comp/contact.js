import React from "react";
import './nav.css';

const Contact = () => {
    return (
        <>
        <div className="contact">
            <div className="conatiner">
                <div className="form">
                    <h2># contact us</h2>
                    <form method="POST">
                        <div className="box">
                            <div className="label">
                                <h4>Name</h4>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Enter your name" value="" name="" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                <h4>Email</h4>
                            </div>
                            <div className="input">
                                <input type="email" placeholder="Enter your email" value="" name="" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                <h4>Subject</h4>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Enter your subject" value="" name="" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                <h4>Message</h4>
                            </div>
                            <div className="input">
                                <textarea placeholder="Enter your message !" value="" name=""></textarea>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;
