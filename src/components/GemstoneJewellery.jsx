import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/GemstoneJewellery.css";
import img1 from "../assets/images/gemstone-necklace.jpg";
import img2 from "../assets/images/Rings.jpg";
import img3 from "../assets/images/Earrings.jpg";
import img4 from "../assets/images/gemstone-bangles.jpg";
import '../assets/css/CategoryPage.css'

const gemstoneJewelleryItems = [
  { id: 1, category: "Necklace", image: img1 },
  { id: 2, category: "Rings", image: img2 },
  { id: 3, category: "Earrings", image: img3 },
  { id: 4, category: "Bangles", image: img4 },
];

const GemstoneJewellery = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="gemstone-container">
      <h2 className="gemstone-title">Gemstone Jewellery</h2>
      <p className="gemstone-subtitle">
        Capturing timeless grace in each precious stone
      </p>

      <div className="gemstone-grid">
        {gemstoneJewelleryItems.map((item) => (
          <div
            className="gemstone-card"
            key={item.id}
            onClick={() => handleCategoryClick(item.category)}
          >
            <img src={item.image} alt={item.category} className="gemstone-image" />
            <p className="gemstone-category">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GemstoneJewellery;

