import React, { useState } from "react";
import './contact.css'
const ContactPage = () => {
    const [activeForm, setActiveForm] = useState("send-message");
    const handleActiveForm = (form) => {
        setActiveForm(form);
    }
    return (
        <div className="contact-page">
            <h2>Enter your Precious Message</h2>
            <div className="contact-form">
                <ul className="contact-form-header">
                    <li onClick={() => handleActiveForm("send-message")} className={`contact-form-header-link ${activeForm === "send-message" ? "contact-form-header-link-active" : ""}`}>Send Message</li>
                    <li onClick={() => handleActiveForm("send-on-whatsapp")} className={`contact-form-header-link ${activeForm === "send-on-whatsapp" ? "contact-form-header-link-active" : ""}`}>Send On WhatsApp </li>
                </ul>
                <div className="contact-form-main">
                    {
                        activeForm === "send-message" ? (
                            <form>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Subject" />
                                <textarea placeholder="Message" />
                                <button type="submit">Send</button>
                            </form>
                            ): (
                                <form>
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="text" placeholder="Subject" />
                                    <textarea placeholder="Message" />
                                    <button type="submit">Send WhatsApp</button>
                                </form>
                            )
                    }
                </div>
            </div>
        </div>
    );
};
export default ContactPage;