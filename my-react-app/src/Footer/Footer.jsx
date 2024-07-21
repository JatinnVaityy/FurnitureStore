import React from 'react';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './Footer.css';

const Footer = () => {
  return (
  
  


    <div className="footer">
      <div className="footer-container">
        {/* Column 1: Connect With Us and Information */}
        <div className="footer-column">
          <div className="footer-section">
            <h4>Connect With Us</h4>
           
          </div>
          <div className="footer-section">
            
            <ul>
              <li><NavLink to="/contact-us" activeClassName="active-link">Contact Us</NavLink></li>
              <li><a href="#">Disclaimer</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
        </div>
    
        {/* Column 2: FAQs and Policies */}
        <div className="footer-column">
          <div className="footer-section">
            <h4>Information</h4>
            <ul>
              <li><NavLink to="/faq" activeClassName="active-link">FAQ</NavLink></li>
              <li><NavLink to="/return-refund-policy" activeClassName="active-link">Return/Refund Policy</NavLink></li>
              <li><NavLink to="/maintain-your-furniture" activeClassName="active-link">Maintain Your Furniture</NavLink></li>
              <li><NavLink to="/terms-of-use" activeClassName="active-link">Terms of Use</NavLink></li>
            </ul>
          </div>
        </div>
    
        {/* Column 3: Navigation, Contact Us, and Social Icons */}
        <div className="footer-column">
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
             
              <li><NavLink to="/privacy-policy" activeClassName="active-link">Privacy Policy</NavLink></li>
            </ul>
          </div>
          <div className="footer-section">
            
            
          </div>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-facebook"></i>
</a>
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-instagram"></i>
</a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-twitter"></i>
</a>

          </div>
        </div>
      </div>
    </div>
    
    

  );
}

export default Footer;
