import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(prev => !prev);
  };

  const handleSearch = () => {
    // Add your search logic here
    console.log('Search triggered');
  };

  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <div className="search-container">
            <FaSearch className="icon search-icon" onClick={toggleSearch} />
            {searchVisible && (
              <div className="search-bar-container">
                <input type="text" className="search-input" placeholder="Search" />
                <button className="search-button" onClick={handleSearch}>Search</button>
              </div>
            )}
          </div>
          <div className="title-container">
            <h1>Modern Comfort Furnishings</h1>
          </div>
          <div className="icons-container">
            <FaUser className="icon" />
            <FaShoppingCart className="icon" />
          </div>
        </div>
      </header>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">Living Room
            <ul className="dropdown-menu">
              <li className="dropdown-item">Sofa</li>
              <li className="dropdown-item">Coffee Table</li>
              <li className="dropdown-item">Shoe Rack</li>
            </ul>
          </li>
          <li className="nav-item">Bedroom
            <ul className="dropdown-menu">
              <li className="dropdown-item">Bed</li>
              <li className="dropdown-item">Side Table</li>
              <li className="dropdown-item">Dressing Table</li>
            </ul>
          </li>
          <li className="nav-item">Kitchen
            <ul className="dropdown-menu">
              <li className="dropdown-item">Cupboards</li>
              <li className="dropdown-item">Wall Shelves</li>
            </ul>
          </li>
          <li className="nav-item">Seating
            <ul className="dropdown-menu">
              <li className="dropdown-item">Chairs</li>
              <li className="dropdown-item">Stools</li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;