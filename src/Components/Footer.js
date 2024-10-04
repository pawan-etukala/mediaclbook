import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-dark text-white pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-white text-decoration-none"
                  onClick={() => handleClick('/PrivacyPolicy')}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-decoration-none"
                  onClick={() => handleClick('/terms-service')}
                >
                  Terms and Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-decoration-none"
                  onClick={() => handleClick('/return-refund-policy')}
                >
                  Return and Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-decoration-none"
                  onClick={() => handleClick('/shopping-policy')}
                >
                  Shopping Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>
              Email: <a href="mailto:shiva.methuku@gmail.com" className="text-white">shiva.methuku@gmail.com</a>
            </p>
            <p>Phone: +91 630 556 5672</p>
            <p>Address: H.No:1-7-376, Revenue Colony, Subedari, Hanamkonda, Telangana-506001</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <a href="#" className="text-white me-2"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white me-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Haelan Homeopathy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
