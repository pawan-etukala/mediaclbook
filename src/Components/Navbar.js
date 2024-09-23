import React from 'react';
import '../css/Navbar.css';
import logo from '../Assets/homeo.jpg';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top  navbar-custom">
      <div className="container-fluid navbar px-5 py-3">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="30" height="24" />
        </Link>
        <Link className="navbar-brand text-white fw-semibold font-monospace fs-2" to="/">
          HELAN HOMEOPATHY
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white fw-semibold fs-5" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white fw-semibold fs-5" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-white fw-semibold fs-5" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
