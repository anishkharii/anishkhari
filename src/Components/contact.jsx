import React, { useState } from "react";
import './contact.css'
const ContactPage = () => {
    const [activeForm, setActiveForm] = useState("send-message");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [whatsappMsg, setWhatsappMsg] = useState("");
    const handleActiveForm = (form) => {
        setActiveForm(form);
    }

    const sendWhatsappMsg = (e) => {
        e.preventDefault();
        let msgUrl = `https://api.whatsapp.com/send?phone=919350806380&text=${whatsappMsg}`;
        window.open(msgUrl,'_blank');
    }
    return (
        <div className=" flex flex-col mx-auto w-3/4 text-center">
            <h2 className="text-2xl m-[0_0_2rem_0]">Enter your Precious Message</h2>
            <div className="flex flex-col gap-6">
                <ul className=" flex justify-center gap-2">
                    <li onClick={() => handleActiveForm("send-message")} className={`contact-form-header-link ${activeForm === "send-message" ? "contact-form-header-link-active" : ""}`}>Send Message</li>
                    <li onClick={() => handleActiveForm("send-on-whatsapp")} className={`contact-form-header-link ${activeForm === "send-on-whatsapp" ? "contact-form-header-link-active" : ""}`}>Send On WhatsApp </li>
                </ul>
                <div className=" transition-all">
                    {
                        activeForm === "send-message" ? (
                            <form className="flex flex-col justify-center items-center gap-3">
                                <input className=" p-2 rounded-md w-72 transition-all duration-150 " type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" />
                                <input className=" p-2 rounded-md w-72 transition-all duration-150 " type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" />
                                <input className=" p-2 rounded-md w-72 transition-all duration-150 " type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="Subject" />
                                <textarea className=" p-2 rounded-md w-72 transition-all duration-150 " value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Message" />
                                <button type="submit" className=" bg-blue-600 px-5 py-2 text-white rounded-md  transition-all duration-150 hover:bg-[#00f]">Send</button>
                            </form>
                            ): (
                                <form className="flex flex-col justify-center items-center gap-3">
                                    <textarea className="p-2 rounded-md w-72 transition-all duration-150 " value={whatsappMsg} onChange={(e) => setWhatsappMsg(e.target.value)} placeholder="Message" />
                                    <button type="submit" className=" bg-blue-600 px-5 py-2 text-white rounded-md  transition-all duration-150 hover:bg-[#00f]" onClick={sendWhatsappMsg}>Send WhatsApp</button>
                                </form>
                            )
                    }
                </div>
            </div>
        </div>
    );
};
export default ContactPage;