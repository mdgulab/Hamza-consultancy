// src/components/Footer.jsx

import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/MyLogo.png" alt="Pediatrics Logo" className="foot-img" />
            <p className="footer-description">
              Bringing scholars, researchers, knowledge seekers, and learners
              together to share insights on scientific advancements that benefit
              humanity and society.
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">USEFUL LINKS</h3>
          <ul className="footer-links">
            <li>
              <Link to="/HomePage" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Services" className="footer-link">
                Services
              </Link>
            </li>

            <li>
              <Link to="/Contact" className="footer-link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/#" className="footer-link">
                Upcomming..
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">CONTACT INFO</h3>
          <p className="footer-contact">Phone: +91-9102129391</p>
          <p className="footer-contact">Email: info@hamzaconsultancy.in</p>
          <p className="footer-contact">Sarswa, Motihari,Bihar,India-845401</p>
        </div>
      </div>
      <div className="footer-bottom">
        <center>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </center>
        <center>
          {" "}
          <p>
            Follow us on:
            <a
              href="https://twitter.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Twitter
            </a>{" "}
            |
            <a
              href="https://facebook.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Facebook
            </a>{" "}
            |
            <a
              href="https://instagram.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Instagram
            </a>
            <Link className="social-link" to="https://wa.me/7322822761">
              | Whatsapp
            </Link>
          </p>
        </center>
      </div>
    </footer>
  );
};

export default Footer;
