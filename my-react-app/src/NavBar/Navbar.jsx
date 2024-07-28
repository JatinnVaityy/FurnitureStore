import React, { useContext } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaAngleDown, FaAngleUp, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext.jsx';

const Navbar = () => {
  const { isLoggedIn, isAdmin, logout } = useContext(AuthContext);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const navigate = useNavigate();
  console.log('isLoggedIn:', isLoggedIn);
  console.log('isAdmin:', isAdmin);
  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <div className="search-container">
            <FaSearch className="icon search-icon" />
            {/* Add search bar and button if needed */}
          </div>
          <div className="title-container">
            <h1>Modern Comfort Furnishings</h1>
          </div>
          <div className="icons-container">
            {isAdmin && isLoggedIn && (
              <NavLink to="/add-furniture" className="add-furniture-button">
                Add Furniture
              </NavLink>
            )}
            {isLoggedIn ? (
              <button className="logout-button" onClick={handleLogout}>
                <FaSignOutAlt className="icon" />
                Logout
              </button>
            ) : (
              <NavLink to="/login">
                <FaUser className="icon" />
              </NavLink>
            )}
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
              <li className="dropdown-item" onClick={closeDropdown}>
                <NavLink to="/sofa" activeclassname="active-link">Sofa</NavLink>
              </li>
              <li className="dropdown-item" onClick={closeDropdown}>
                <NavLink to="/CoffeeTable" activeclassname="active-link">Coffee Table</NavLink>
              </li>
              <li className="dropdown-item" onClick={closeDropdown}>
                <NavLink to="/Shoerack" activeclassname="active-link">Shoe Rack</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item" onMouseLeave={closeDropdown}>
            <span className="nav-link" onClick={() => toggleDropdown('bedroom')}>
              Bedroom
              {activeDropdown === 'bedroom' ? <FaAngleUp className="dropdown-icon" /> : <FaAngleDown className="dropdown-icon" />}
            </span>
            <ul className={`dropdown-menu ${activeDropdown === 'bedroom' ? 'open' : ''}`}>
              <li className="dropdown-item" onClick={closeDropdown}>
                <NavLink to="/Bed" activeclassname="active-link">Bed</NavLink>
              </li>
              <li className="dropdown-item" onClick={closeDropdown}>
                <NavLink to="/SideTable" activeclassname="active-link">Side Table</NavLink>
              </li>
              <li className="dropdown-item" onClick={closeDropdown}>
                <NavLink to="/Dressingtable" activeclassname="active-link">Dressing Table</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item" onMouseLeave={closeDropdown}>
            <span className="nav-link" onClick={() => toggleDropdown('kitchen')}>
              Kitchen
              {activeDropdown === 'kitchen' ? <FaAngleUp className="dropdown-icon" /> : <FaAngleDown className="dropdown-icon" />}
            </span>
            <ul className={`dropdown-menu ${activeDropdown === 'kitchen' ? 'open' : ''}`}>
              <li className="dropdown-item" onClick={closeDropdown}>
                <NavLink to="/Cupboard" activeclassname="active-link">Cupboards</NavLink>
              </li>
              <li className="dropdown-item" onClick={closeDropdown}>
                <NavLink to="/Wallshelves" activeclassname="active-link">Wall Shelves</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item" onMouseLeave={closeDropdown}>
            <span className="nav-link" onClick={() => toggleDropdown('seating')}>
              Seating
              {activeDropdown === 'seating' ? <FaAngleUp className="dropdown-icon" /> : <FaAngleDown className="dropdown-icon" />}
            </span>
            <ul className={`dropdown-menu ${activeDropdown === 'seating' ? 'open' : ''}`}>
              <li className="dropdown-item" onClick={closeDropdown}>
                <NavLink to="/Chair" activeclassname="active-link">Chairs</NavLink>
              </li>
              <li className="dropdown-item" onClick={closeDropdown}>
                <NavLink to="/Stools" activeclassname="active-link">Stools</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
