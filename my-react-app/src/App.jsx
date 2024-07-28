import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer/Footer.jsx';
import ContactUs from './Footer/ContactUs';
import FAQ from './Footer/FAQ.jsx';
import PrivacyPolicy from './Footer/PrivacyPolicy.jsx';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './NavBar/Navbar.jsx';
import './NavBar/Navbar.css';
import Home from './component/Home';
import Newarrivals from './component/Newarrivals';
import Bestseller from './component/Bestseller';
import ImageRow from './component/ImageRow';
import CenteredText from './component/CenteredText';
import Login from  './NavBar/Login.jsx'
import Signup from './NavBar/Signup.jsx'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-arrivals" element={<Newarrivals />} />
          <Route path="/bestseller" element={<Bestseller />} />
          <Route path="/image-row" element={<ImageRow />} />
          <Route path="/centered-text" element={<CenteredText />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
