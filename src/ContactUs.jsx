import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./ContactUs.css";

function ContactUs() {
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_athcybd',          // Your service ID
            'template_6atuz6k',         // Your template ID
            formRef.current,
            { publicKey: 'GP_VTjqdhCkwsiPKb' }  // Your public key
        )
        .then(
            () => {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 3000);
                formRef.current.reset(); // clear form
            },
            (error) => {
                console.error("EmailJS Error:", error.text);
            }
        );
    };

    return (
        <div className="contact-container">
            <div className="contact-content">

                {/* Contact Info */}
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p><i className="fas fa-envelope" style={{ color: "#D44638", marginRight: "8px" }}></i><strong>Email:</strong> chandrabose1632@gmail.com</p>
                    <p><i className="fas fa-phone" style={{ color: "#34A853", marginRight: "8px" }}></i><strong>Phone:</strong> 8074112811</p>
                    <p><i className="fas fa-map-marker-alt" style={{ color: "#EA4335", marginRight: "8px" }}></i><strong>Address:</strong> Gayatri Nagar, Vijayawada</p>

                    <h3 className="social-title">Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/chandrabosepallikanti" className="social-link">
                            <i className="fab fa-facebook-f" style={{ color: "#FFFFFF", fontSize: "22px" }}></i>
                        </a>
                        <a href="https://www.instagram.com/chandrabose_pallikanti/" className="social-link">
                            <i className="fab fa-instagram" style={{ color: "#e1306c", fontSize: "22px" }}></i>
                        </a>
                        <a href="#" className="social-link">
                            <i className="fab fa-twitter" style={{ color: "#1DA1F2", fontSize: "22px" }}></i>
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    {submitted && <div className="success-message">Thank you for contacting us! We’ll be in touch soon.</div>}

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input type="text" name="user_name" placeholder="Enter your name" required />

                        <label>Email</label>
                        <input type="email" name="user_email" placeholder="Enter your email" required />

                        <label>Message</label>
                        <textarea name="message" rows="4" placeholder="Your message" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>

            {/* Google Map */}
            <div className="map-section">
                <h3>Find Us Here</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13388.13484315716!2d80.63337068415!3d16.50356349058044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb486d077f97%3A0xeef5a60c472beb3e!2sEat%20street%20Vijayawada!5e1!3m2!1sen!2sin!4v1744449335835!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0, borderRadius: "10px" }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}

export default ContactUs;
