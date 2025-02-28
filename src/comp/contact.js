import React, { useState } from "react";
import './nav.css';

const Contact = () => {

    const[user, setUser] = useState(
        {
            Name : "", email: "", subject: "", Message: ""
        }
    );
       let values, names
    const data = (e) => 
        {
            values = e.target.value;
            names = e.target.name;
            setUser({...user, [names]: values})
        }

        const send = async (e) => 
        {
            const {Name, email, subject, Message} = user
            e.preventDefault()
            const option = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "Accept": "application/json"
                },
                body: JSON.stringify({
                    Name, email, subject, Message
                })
            }
           
            const send = await fetch(
                'https://e-commerce-contact-5c319-default-rtdb.firebaseio.com/Messages.json', option
            )
            if (send) {
                alert("Message Sent")
            }
            else{
                alert("Something went wrong")
            }
        }

    return (
        <>
        <div className="contact px-[40px] py-[20px] w-full">
            <div className="conatiner py-[20px] px-[10px] w-max-full">
                <div className="form w-[400px] bg-[#f6f6f6] py-[30px] px-[20px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] mx-auto border-t-[3px] border-[#fed700] rounded-[5px]">
                    <h2 className="text-[#cd1e76] uppercase font-semibold text-lg tracking-wide"># contact us</h2>
                    <form method="POST">
                        <div className="box flex mt-[20px] justify-between">
                            <div className="label">
                                <h4 className="ml-[30px] text-[#232323] text-sm font-semibold mt-[10px]">Name</h4>
                            </div>
                            <div className="input">
                                <input className="mr-[16px] border-0 outline-none bg-transparent border-b-[2px] border-[#8a8a8a] py-[10px] px-[20px]" 
                                type="text" placeholder="Enter your name" value={user.Name} name="Name" onChange={data}/>
                            </div>
                        </div>
                        <div className="box flex mt-[20px] justify-between">
                            <div className="label">
                                <h4 className="ml-[30px] text-[#232323] text-sm font-semibold mt-[10px]">Email</h4>
                            </div>
                            <div className="input">
                                <input className="mr-[16px] border-0 outline-none bg-transparent border-b-[2px] border-[#8a8a8a] py-[10px] px-[20px]" 
                                type="email" placeholder="Enter your email" value={user.email} name="email" onChange={data}/>
                            </div>
                        </div>
                        <div className="box flex mt-[20px] justify-between">
                            <div className="label">
                                <h4 className="ml-[30px] text-[#232323] text-sm font-semibold mt-[10px]">Subject</h4>
                            </div>
                            <div className="input">
                                <input className="mr-[16px] border-0 outline-none bg-transparent border-b-[2px] border-[#8a8a8a] py-[10px] px-[20px]" 
                                type="text" placeholder="Enter your subject" value={user.subject} name="subject" onChange={ data}/> 
                            </div>
                        </div>
                        <div className="box flex mt-[20px] justify-between">
                            <div className="label">
                                <h4 className="ml-[30px] text-[#232323] text-sm font-semibold mt-[10px]">Message</h4>     
                            </div>
                            <div className="input">
                                <textarea className="mr-[30px] border-0 outline-none bg-transparent border-b-[2px] border-[#8a8a8a] py-[10px] px-[20px] resize-none" 
                                placeholder="Enter your message !" value={user.Message} name="Message" onChange={data}></textarea>
                            </div>
                        </div>

                        {/* contact form goes google firebase */}
                        <button className="mt-[20px] ml-[30px] py-[10px] px-[30px] text-[#232323] border-0 outline-none bg-none bg-[#fed700] cursor-pointer" 
                        type="submit" onClick={send}>Send</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;
