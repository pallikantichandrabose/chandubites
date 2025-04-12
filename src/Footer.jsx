import React from "react";
import "./Footer.css"; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'; // ← Add this

function Footer() {
    return (
        <footer className="footer">
            <br /> <br />
            <div className="footer-container">
                {/* Brand and About Section */}
                <div className="footer-section">
                    <h2 className="footer-title">ChanduBites</h2>
                    <p className="footer-text">Serving delicious food with love. Order now and enjoy the best flavors.</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3 className="footer-subtitle">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact and Social Media */}
                <div className="footer-section">
                    <div className="footer-contact">
                        <h3 className="footer-subtitle">Contact Us</h3>
                        <p><FontAwesomeIcon icon={faLocationDot} style={{ color: '#1da1f2' }} /> 60, Vemula Syamala Devi St, Giripuram, Labbipet, Vijayawada, Andhra Pradesh 520002</p>
                        <p><FontAwesomeIcon icon={faPhone} style={{ color: '#28a745' }} /> +91 8074112811</p>
                        <p><FontAwesomeIcon icon={faEnvelope} style={{ color: '#e4405f' }} /> support@chandubites.com</p>
                    </div>

                    <div className="footer-social">
                        <h3 className="footer-subtitles">Follow Us</h3>
                        <div className="social-links">
                            <a href="https://www.facebook.com/chandrabosepallikanti"><FontAwesomeIcon icon={faFacebookF} /><span>Facebook</span></a>
                            <a href="https://www.instagram.com/chandrabose_pallikanti/"><FontAwesomeIcon icon={faInstagram} /><span>Instagram</span></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /><span>Twitter</span></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Centered Copyright */}
            <div className="footer-copyright">
                <p>&copy; 2025 ChanduBites. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
