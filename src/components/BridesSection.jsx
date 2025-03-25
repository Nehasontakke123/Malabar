import React from "react";
import { useNavigate } from "react-router-dom";  // Navigation साठी import
import banner from "../assets/images/Brides-of-India-banner.jpg";
import dazzlingBride from "../assets/images/Bride_01.jpg";
import bejeweledBride from "../assets/images/Bride_02.jpg";
import enchantingBride from "../assets/images/Bride_03.jpg";
import trendsetterBride from "../assets/images/Bride_04.jpg";
import showstopperBride from "../assets/images/Bride_05.jpg";
import "../assets/css/BridesSection.css";

const brides = [
  { id: 2, title: "Dazzling Bride", image: dazzlingBride },
  { id: 3, title: "Bejeweled Bride", image: bejeweledBride },
  { id: 4, title: "Enchanting Bride", image: enchantingBride },
  { id: 5, title: "Trendsetter Bride", image: trendsetterBride },
  { id: 6, title: "Showstopper Bride", image: showstopperBride },
];

const BridesSection = () => {
  const navigate = useNavigate();  
  
  const handleBannerClick = () => {
    navigate("/brides-of-india");  
  };

  return (
    <div className="brides-section">
      {/* Heading and Subtitle */}
      <div className="brides-heading">
        <h2>Brides Of India</h2>
        <p>Leading the journey of a new life in their own unique way</p>
      </div>

      {/* Banner Section */}
      <div className="banner" onClick={handleBannerClick} style={{ cursor: "pointer" }}>
        <img src={banner} alt="Brides of India" className="banner-img" />
        <div className="overlay-text">
          {/* <h2>#ShowTheWay</h2> */}
          {/* <img src="path_to_logo/brides-logo.png" alt="Brides of India" className="brides-logo" /> */}
        </div>
      </div>

      {/* Brides Categories */}
      <div className="brides-list">
        {brides.map((bride) => (
          <div key={bride.id} className="bride-card">
            <img src={bride.image} alt={bride.title} className="bride-img" />
            <p className="bride-name">{bride.title || "Bride"}</p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="view-all-container">
        {/* <button className="view-all">VIEW ALL</button> */}
      </div>
    </div>
  );
};

export default BridesSection;
