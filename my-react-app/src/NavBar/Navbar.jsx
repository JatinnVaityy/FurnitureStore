import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSearch = () => {
    setSearchVisible(prev => !prev);
  };

  const handleSearch = () => {
    // Add your search logic here
    console.log('Search triggered');
  };

  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
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
          <li className="nav-item" onMouseLeave={closeDropdown}>
            <span className="nav-link" onClick={() => toggleDropdown('livingRoom')}>
              Living Room
              {activeDropdown === 'livingRoom' ? <FaAngleUp className="dropdown-icon" /> : <FaAngleDown className="dropdown-icon" />}
            </span>
            <ul className={`dropdown-menu ${activeDropdown === 'livingRoom' ? 'open' : ''}`}>
              <li className="dropdown-item" onClick={closeDropdown}>Sofa</li>
              <li className="dropdown-item" onClick={closeDropdown}>Coffee Table</li>
              <li className="dropdown-item" onClick={closeDropdown}>Shoe Rack</li>
            </ul>
          </li>
          <li className="nav-item" onMouseLeave={closeDropdown}>
            <span className="nav-link" onClick={() => toggleDropdown('bedroom')}>
              Bedroom
              {activeDropdown === 'bedroom' ? <FaAngleUp className="dropdown-icon" /> : <FaAngleDown className="dropdown-icon" />}
            </span>
            <ul className={`dropdown-menu ${activeDropdown === 'bedroom' ? 'open' : ''}`}>
              <li className="dropdown-item" onClick={closeDropdown}>Bed</li>
              <li className="dropdown-item" onClick={closeDropdown}>Side Table</li>
              <li className="dropdown-item" onClick={closeDropdown}>Dressing Table</li>
            </ul>
          </li>
          <li className="nav-item" onMouseLeave={closeDropdown}>
            <span className="nav-link" onClick={() => toggleDropdown('kitchen')}>
              Kitchen
              {activeDropdown === 'kitchen' ? <FaAngleUp className="dropdown-icon" /> : <FaAngleDown className="dropdown-icon" />}
            </span>
            <ul className={`dropdown-menu ${activeDropdown === 'kitchen' ? 'open' : ''}`}>
              <li className="dropdown-item" onClick={closeDropdown}>Cupboards</li>
              <li className="dropdown-item" onClick={closeDropdown}>Wall Shelves</li>
            </ul>
          </li>
          <li className="nav-item" onMouseLeave={closeDropdown}>
            <span className="nav-link" onClick={() => toggleDropdown('seating')}>
              Seating
              {activeDropdown === 'seating' ? <FaAngleUp className="dropdown-icon" /> : <FaAngleDown className="dropdown-icon" />}
            </span>
            <ul className={`dropdown-menu ${activeDropdown === 'seating' ? 'open' : ''}`}>
              <li className="dropdown-item" onClick={closeDropdown}>Chairs</li>
              <li className="dropdown-item" onClick={closeDropdown}>Stools</li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
