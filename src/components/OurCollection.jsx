import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import legendz from "../assets/images/Legendz-collection.jpg";
import starlet from "../assets/images/kids-collection.jpg";
import sankhaPola from "../assets/images/Sankha-Pola.jpg";
import "../assets/css/OurCollection.css";

const collections = [
  { id: 1, title: "Rings", subtitle: "Elegant & Stylish", image: legendz, category: "Rings" },
  { id: 2, title: "Chains", subtitle: "Classic & Timeless", image: starlet, category: "Gold Chains" },
  { id: 3, title: "Coins & Bangles", subtitle: "Gold & Silver", image: sankhaPola, category: "Bangles" },
];

const OurCollection = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleCollectionClick = (category) => {
    navigate(`/category/${category}`); // Navigate to product page with category
  };

  return (
    <div className="our-collection-section">
      <h2 className="collection-title">Our Collection</h2>
      <p className="collection-description">
        Discover our latest jewellery collection!
      </p>
      
      <div className="collection-wrapper">
        {collections.map((item) => (
          <div className="collection-box" key={item.id} onClick={() => handleCollectionClick(item.category)}>
            <img src={item.image} alt={item.title} className="collection-img" />
            <div className="collection-overlay">
              <h3 className="collection-name">{item.title}</h3>
              <p className="collection-subtitle">{item.subtitle}</p>
              {/* <button className="discover-btn">DISCOVER</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCollection;
