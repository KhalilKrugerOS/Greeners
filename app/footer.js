import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaPinterestP, FaBloggerB } from 'react-icons/fa';
import './footer.css'; // Assurez-vous que ce fichier CSS est dans le même dossier

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            {/* Assurez-vous que le chemin de l'image est correct */}
            <img src="/path-to-your-logo.svg" alt="Fundly Logo" />
            <p>Fundly is dedicated to providing you with the tools you need to raise money for whatever your cause may be.</p>
          </div>
        </div>
        <div className="footer-section">
          <h3>ABOUT US</h3>
          <ul>
            <li><a href="#">Fundraising Ideas</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /> Facebook</a>
            <a href="#"><FaTwitter /> Twitter</a>
            <a href="#"><FaInstagram /> Instagram</a>
            <a href="#"><FaGooglePlusG /> Google+</a>
            <a href="#"><FaPinterestP /> Pinterest</a>
            <a href="#"><FaBloggerB /> Blog</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © Fundly 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
