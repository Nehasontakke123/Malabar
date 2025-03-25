import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import coinPendant from "../assets/images/coins.jpg";
import goldCoins from "../assets/images/gold-coins.jpg";
import silverCoins from "../assets/images/silver.jpg";
import diamondBangles from "../assets/images/bangles.jpg";
import mangalsutras from "../assets/images/mangalsutra.jpg";
import "../assets/css/CategorySection.css";
// import '../assets/css/ProductPages.css'

const categories = [
  { id: 1, title: "Coin Pendant", image: coinPendant, highlight: "Coins", category: "Coin-Pendants" },
  { id: 2, title: "Gold Coins", image: goldCoins, highlight: "Gold", category: "Coins & Bars"  },
  { id: 3, title: "Silver Coins", image: silverCoins, highlight: "Silver", category: "Silver-Coins" },
  { id: 4, title: "Diamond Bangles", image: diamondBangles, highlight: "Diamond", category: "Bangles" },
  { id: 5, title: "Mangalsutras", image: mangalsutras, highlight: "Mangalsutra", category: "Mangalsutra" },
];

const CategorySection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle category click
  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);  // Navigate to Product Page with category
  };

  return (
    <div className="category-section">
      <h2 className="category-title">Shop By Category</h2>
      <p className="category-description">
        Explore fine jewellery to mark life's most meaningful moments
      </p>

      <div className="category-wrapper">
        {categories.map((item) => (
          <div className="category-box" key={item.id} onClick={() => handleCategoryClick(item.category)}>
            <img src={item.image} alt={item.title} className="category-img" />
            <p className="category-text">
              <span className="category-highlight">{item.highlight}</span> {item.title.replace(item.highlight, "")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
