import React from "react";
import './AboutUs.css';
import 'font-awesome/css/font-awesome.min.css';


function AboutUs() {
    return (
        <div className="about-container">
            {/* Header Section */}
            <div className="text-center mb-5">
                <h1 className="fw-bold text-primary">About Fresh Food Mart</h1>
                <p className="text-muted">Your trusted source for fresh, high-quality food delivered right to your doorsteps.</p>
            </div>

            {/* Introduction Section */}
            <div className="section mb-5">
                <h2 className="section-title">Who We Are</h2>
                <p className="section-description">
                    At <strong>Fresh Food Mart</strong>, our mission is to provide you with a variety of fresh, organic, and high-quality food products. We offer everything from vegetables, dairy products, seafood, meat, bakery essentials, and more. We guarantee freshness and quality in every product we offer.
                </p>
            </div>

            {/* Mission Section */}
            <div className="mission-box mb-5">
                <h2 className="text-center text-primary">Our Mission</h2>
                <p className="text-center">
                    We strive to provide organic and high-quality food while maintaining high standards of hygiene, sustainability, and customer convenience.
                </p>
            </div>

            {/* Food Categories Section */}
            <h2 className="text-center text-dark mb-4">Our Product Categories</h2>
            <div className="categories">
                <div className="category">
                    <i className="fas fa-leaf category-icon"></i>
                    <h5 className="category-title">Fresh Vegetables</h5>
                </div>
                <div className="category">
                    <i className="fas fa-cheese category-icon"></i>
                    <h5 className="category-title">Dairy Products</h5>
                </div>
                <div className="category">
                    <i className="fas fa-fish category-icon"></i>
                    <h5 className="category-title">Meat & Seafood</h5>
                </div>
                <div className="category">
                    <i className="fas fa-shopping-cart category-icon"></i>
                    <h5 className="category-title">Groceries & Staples</h5>
                </div>
                <div className="category">
                    <i className="fas fa-bread-slice category-icon"></i>
                    <h5 className="category-title">Bakery & Beverages</h5>
                </div>
                <div className="category">
                    <i className="fas fa-truck category-icon"></i>
                    <h5 className="category-title">Fast Delivery</h5>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="why-choose-us">
                <h2 className="text-center text-primary">Why Choose Us?</h2>
                <ul className="list-unstyled text-center">
                    <li className="feature">✔ 100% Fresh & Quality Products</li>
                    <li className="feature">✔ Ethically Sourced & Hygienic</li>
                    <li className="feature">✔ Quick & Hassle-Free Delivery</li>
                    <li className="feature">✔ Affordable Prices & Discounts</li>
                    <li className="feature">✔ Excellent Customer Support</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutUs;
