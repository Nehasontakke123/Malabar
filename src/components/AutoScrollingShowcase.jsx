import React, { useEffect, useRef } from "react";
import "../assets/css/AutoScrollingShowcase.css"; // CSS File

// Import Jewellery Images
import goldRing from "../assets/images/Gold-Ring.jpg";
import goldEarring from "../assets/images/Gold-Earring.jpg";
import goldPendant from "../assets/images/Gold-Pendant (3).jpg";
import goldChain from "../assets/images/Gold-Chain.jpg";

const jewelleryItems = [
  { id: 1, image: goldRing },
  { id: 2, image: goldEarring },
  { id: 3, image: goldPendant },
  { id: 4, image: goldChain },
  { id: 5, image: goldRing }, // Repeat for smooth scrolling effect
  { id: 6, image: goldEarring },
];

const AutoScrollingShowcase = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1; // Adjust speed if needed
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0; // Reset to beginning
        }
      }
    };

    const interval = setInterval(scroll, 30); // Adjust speed by changing interval time

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="auto-scrolling-container">
      <h2 className="showcase-title">Trending Jewellery</h2>
      <div className="scroll-wrapper" ref={scrollRef}>
        <div className="scroll-content">
          {jewelleryItems.map((item) => (
            <div key={item.id} className="scroll-item">
              <img src={item.image} alt="Jewellery" className="scroll-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScrollingShowcase;
