import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer/Footer.jsx';
import ContactUs from './Footer/ContactUs';
import FAQ from './Footer/FAQ.jsx';
import PrivacyPolicy from './Footer/PrivacyPolicy.jsx';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './NavBar/Navbar.jsx';
import './NavBar/Navbar.css'
import Home from './component/Home';
import Newarrivals from './component/Newarrivals';
import Bestseller from './component/Bestseller';
import ImageRow from './component/ImageRow';
import CenteredText from './component/CenteredText';
import Sofa from './Navcomponent/sofa.jsx';
import CoffeeTable from './Navcomponent/CoffeeTable.jsx';
import SideTable from './Navcomponent/SideTable.jsx';
// import Stools from './Stools';
import Cupboard from './Navcomponent/Cupboard.jsx';
import Shoerack from './Navcomponent/Shoerack.jsx';
import DressingTable from './Navcomponent/Dressingtable.jsx';
import Bed from './Navcomponent/Bed.jsx';
import WallShelves from './Navcomponent/Wallshelves.jsx';
import Chair from './Navcomponent/Chair.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/coffee-table" element={<CoffeeTable />} />
          <Route path="/side-table" element={<SideTable />} />
          {/* <Route path="/stools" element={<Stools />} /> */}
          <Route path="/cupboard" element={<Cupboard />} />
          <Route path="/shoe-rack" element={<Shoerack />} />
          <Route path="/dressing-table" element={<DressingTable />} />
          <Route path="/bed" element={<Bed />} />
          <Route path="/wall-shelves" element={<WallShelves />} />
          <Route path="/chair" element={<Chair />} />
        </Routes>
        <div className="App">
          <Home />
          <CenteredText />
          <Newarrivals />
          
          <Bestseller />\
          <ImageRow />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
