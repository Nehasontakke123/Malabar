import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/JewellerySection.css";
import img1 from "../assets/images/diamond-necklace.jpg";
import img2 from "../assets/images/diamond-ring.jpg";
import img3 from "../assets/images/diamond-bangle.jpg";
import img4 from "../assets/images/diamond-earring.jpg";
import img5 from "../assets/images/diamond-mangalsutra.jpg";

const jewelleryItems = [
  { id: 1, category: "Necklace", title: "Statement Necklaces", price: "₹32,400", image: img1 },
  { id: 2, category: "Rings", title: "Sleek Rings", price: "₹10,080", image: img2 },
  { id: 3, category: "Bangles", title: "Elegant Bangles", price: "₹36,200", image: img3 },
  { id: 4, category: "Earrings", title: "Stunning Earrings", price: "₹10,817", image: img4 },
  { id: 5, category: "Mangalsutra", title: "Stylish Mangalsutras", price: "₹36,500", image: img5 },
];

const JewellerySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    const formattedCategory = category.toLowerCase().replace(/\s+/g, "-");
    navigate(`/category/${formattedCategory}`);
  };

  return (
    <div className="jewellery-container">
      {jewelleryItems.map((item) => (
        <div className="jewellery-card" key={item.id} onClick={() => handleCategoryClick(item.category)}>
          <img src={item.image} alt={item.title} className="jewellery-image" />
          <div className="jewellery-content">
            {/* <h3>{item.title}</h3> */}
            {/* <p>{item.price}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JewellerySection;




