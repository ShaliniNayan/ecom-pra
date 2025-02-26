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
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;
