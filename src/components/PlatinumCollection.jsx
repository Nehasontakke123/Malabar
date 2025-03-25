import React, { useState } from "react";
import "../assets/css/PlatinumCollection.css";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Wishlist Icons
import platinumImg1 from "../assets/images/MSD-collection.jpg";
import platinumImg2 from "../assets/images/Men-in-Platinum.jpg";

const platinumItems = [
  {
    id: 1,
    image: platinumImg1,
    name: "MSD Platinum Collection",
    description: "Inspired by timeless elegance and strength.",
  },
  {
    id: 2,
    image: platinumImg2,
    name: "Men in Platinum",
    description: "A blend of boldness and sophistication for modern men.",
  },
];

const PlatinumCollection = () => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div className="platinum-container">
      <h2 className="platinum-heading">Platinum Collection</h2>
      <p className="platinum-subheading">
        Refine elegance with forever gleaming beauties.
      </p>

      <div className="platinum-grid">
        {platinumItems.map((item) => (
          <div className="flip-card" key={item.id}>
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="flip-card-front">
                <img src={item.image} alt={item.name} className="platinum-image" />
              </div>
              {/* Back Side */}
              <div className="flip-card-back">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="platinum-extra-text">
                  Platinum is more than just a metal; it is a legacy of purity, rarity, and durability.
                  A perfect blend of modern craftsmanship and timeless elegance, each piece tells a story 
                  of sophistication. Explore our exclusive collection today.
                </p>
                <button className="wishlist-btn" onClick={() => toggleWishlist(item.id)}>
                  {wishlist.includes(item.id) ? <FaHeart className="heart-icon filled" /> : <FaRegHeart className="heart-icon" />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatinumCollection;
