import React from "react";
import '../assets/css/common.css';

const AboutStore = () => {
  return (
    <section className="container">
      <h2 className="title glow-text">About Our Store</h2>
      <p className="subtitle">
        Get in touch with us for a complete jewellery shopping experience!
      </p>

      <div className="about-grid">
        {/* Left Side - Image Section */}
        <div className="image-box animated-border">
          <img
            src="https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/10_oct/diwali24/homepage/our-store-375.png"
            alt="Malabar Store"
            className="sparkle-hover"
          />
        </div>

        {/* Right Side - Contact & Services */}
        <div className="grid">
          {/* Contact Section */}
          <div className="contact-box animated-border">
            <h3 className="glow-text">9562-916-916</h3>
            <p>For store queries and schemes</p>
          </div>

          {/* Gold Scheme & Gold Rate */}
          <div className="grid">
            <div className="gold-box animated-border">
              <h4 className="box-title">GOLD SCHEME</h4>
              <p className="box-subtitle">Payment for India stores</p>
              <a href="#" className="btn-link glow-button">Pay Online</a>
            </div>
            <div className="gold-box animated-border">
              <h4 className="box-title">GOLD RATE</h4>
              <p className="box-subtitle">One best rate across India!</p>
              <a href="#" className="btn-link glow-button">View Gold Rate</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStore;
