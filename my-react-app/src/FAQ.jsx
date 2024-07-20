import React from 'react';
import { Link } from 'react-router-dom'; // Example import for Link

const FAQ = () => {
  return (
    <div>
      <h2>FAQ Page</h2>
      <p>Here are some frequently asked questions...</p>
      <Link to="/contact-us">Go to Contact Us</Link>
    </div>
  );
}

export default FAQ;
