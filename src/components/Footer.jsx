import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4>Get To Know Us</h4>
        <ul>
          <li>About Us</li>
          <li>Brides Of India</li>
          <li>Our Stores</li>
          <li>CSR</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Let Us Help You</h4>
        <ul>
          <li>FAQ</li>
          <li>Track My Order</li>
          <li>Ring Size Guide</li>
          <li>Bangle Size Guide</li>
          <li>Site Map</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Policies</h4>
        <ul>
          <li>Refund Policy</li>
          <li>Buyback Policy</li>
          <li>Exchange Policy</li>
          <li>Shipping Policy</li>
          <li>Cancellation Policy</li>
          <li>Privacy Policy</li>
          <li>Make To Order</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Useful Links</h4>
        <ul>
          <li>Build Your Custom Jewellery</li>
          <li>Scheme Payment (India only)</li>
          <li>Book an Appointment</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="footer-section customer-service">
        <h4>Customer Service</h4>
        <p>
          📞 +91 22 62300916 <span>(10.00am – 7.00pm)</span>
          <br />
          📱 9167780916 <span>(9.00am – 6.00pm)</span>
          <br />
          ✉️ care.in@malabargoldanddiamonds.com
        </p>
        <p>
          Malabar Gold and Diamonds Limited (formerly known as Malabar Gold Limited)
          <br />
          Plot No 44, 45, Street Number 14, Marol MIDC Industry Estate,
          <br />
          Andheri East, Mumbai - 400093
        </p>
      </div>
    </footer>
  );
};

export default Footer;


