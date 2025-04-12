import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLeaf, faDrumstickBite, faIceCream, faShoppingCart, faClipboardList, faInfoCircle, faPhone } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <BrowserRouter>
      <header className="navbar">
        <div className="navbar-brand">
          <h3><strong className="store-name">ChanduBites</strong></h3>
        </div>
        <nav className="navbar-links">
          <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
          <Link to="/veg"><FontAwesomeIcon icon={faLeaf} /> Veg</Link>
          <Link to="/non-veg"><FontAwesomeIcon icon={faDrumstickBite} /> Non-Veg</Link>
          <Link to="/sweet"><FontAwesomeIcon icon={faIceCream} /> Sweet</Link>
          <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> Cart<span> <strong>{totalItems}</strong></span></Link>
          <Link to="/orders"><FontAwesomeIcon icon={faClipboardList} /> Orders</Link>
          <Link to="/about-us"><FontAwesomeIcon icon={faInfoCircle} /> About Us</Link>
          <Link to="/contact-us"><FontAwesomeIcon icon={faPhone} /> Contact Us</Link>
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
