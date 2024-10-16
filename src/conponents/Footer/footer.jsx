// src/components/Footer.jsx

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
              <a href="/HomePage" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="/ConfrencesPage" className="footer-link">
                Conferences
              </a>
            </li>
            <li>
              <a href="/Guideline" className="footer-link">
                Guidelines
              </a>
            </li>
            <li>
              <a href="/Venue" className="footer-link">
                Venue
              </a>
            </li>
            <li>
              <a href="/Contact" className="footer-link">
                Contact
              </a>
            </li>
            <li>
              <a href="/Travelvisa" className="footer-link">
                Travel Visa
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">CONTACT INFO</h3>
          <p className="footer-contact">Phone: +1 630 768 1199</p>
          <p className="footer-contact">Email: support@stripeconferences.com</p>
          <p className="footer-contact">
            Address: 16192 Coastal Highway, Lewes, Delaware, USA 19958
          </p>
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
          </p>
        </center>
      </div>
    </footer>
  );
};

export default Footer;
