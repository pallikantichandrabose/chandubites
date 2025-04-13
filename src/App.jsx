import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faLeaf, faDrumstickBite, faIceCream, faShoppingCart, faClipboardList, faInfoCircle, faPhone } from '@fortawesome/free-solid-svg-icons';

import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg';
import Sweet from './Sweet';
import Cart from './Cart';
import Orders from './Orders';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <header className="navbar">
        <div className="navbar-brand">
          <h3 className="store-name">ChanduBites</h3>
        </div>
        <button className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
        <nav className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}><FontAwesomeIcon icon={faHome} /> Home</Link>
          <Link to="/veg" onClick={() => setIsMobileMenuOpen(false)}><FontAwesomeIcon icon={faLeaf} /> Veg</Link>
          <Link to="/non-veg" onClick={() => setIsMobileMenuOpen(false)}><FontAwesomeIcon icon={faDrumstickBite} /> Non-Veg</Link>
          <Link to="/sweet" onClick={() => setIsMobileMenuOpen(false)}><FontAwesomeIcon icon={faIceCream} /> Sweet</Link>
          <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)}><FontAwesomeIcon icon={faShoppingCart} /> Cart <strong>({totalItems})</strong></Link>
          <Link to="/orders" onClick={() => setIsMobileMenuOpen(false)}><FontAwesomeIcon icon={faClipboardList} /> Orders</Link>
          <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}><FontAwesomeIcon icon={faInfoCircle} /> About Us</Link>
          <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}><FontAwesomeIcon icon={faPhone} /> Contact Us</Link>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/non-veg" element={<NonVeg />} />
          <Route path="/sweet" element={<Sweet />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
