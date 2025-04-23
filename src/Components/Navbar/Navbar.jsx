import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";
// import { Link } from "react-router-dom";
import { Link } from 'react-scroll';


function Navbar() {

  const [menuactives, setMenuactives] = useState(false);

  const toggleMenu = () => {
    setMenuactives(!menuactives);
  };

  const closeMenu = () => {
    setMenuactives(false);
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="nav_logo_link">
          <img className="nav_logo_img" id="logo" src={logo} />
        </Link>

        <div
          className={`hamb ${menuactives ? 'actives' : ''}`}
          id="menu-toggle"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="navbar">
          <li>
            {/* importing from react-scroll not react-dom-scroll  */}
            <Link to="home"smooth={true} offset={0} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="#">Portfolio</Link>
          </li>
          <Link to="https://api.whatsapp.com/send?phone=917455925669">
            <button className="button">Get in touch</button>
          </Link>
        </nav>
      </header>
      <nav className={`mobile_nav ${menuactives ? 'actives' : ''}`} id="menu-list">
        <div className="remove_icon">
          <i className="ri-close-fill" id="close-menu" onClick={closeMenu}></i>
        </div>
        <div className="nav_main">
          <li>
            <Link to="home" smooth={true} offset={0} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="#">Portfolio</Link>
          </li>
          <li>
            <Link to="https://api.whatsapp.com/send?phone=917455925669">
              Get in touch
            </Link>
          </li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
