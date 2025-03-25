import React, { useState } from "react";
import '../assets/css/FlipCard.css'
const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flip-card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <img src="https://via.placeholder.com/200" alt="Product" />
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <p>🎉 Special Offer: Get 20% OFF! 🎉</p>
          <p>Use Code: <b>FLIP20</b></p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
