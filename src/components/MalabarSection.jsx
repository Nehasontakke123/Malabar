import React from "react";
import bracelet from "../assets/images/brdzl40761_c_1.jpg";
import earrings from "../assets/images/chdzl10055_c_1.jpg";
import ring from "../assets/images/ergen22971_c.jpg";
import studs from "../assets/images/ergen22987_c.jpg";
import img1 from "../assets/images/ernob47367_c_1.jpg";
import img2 from "../assets/images/ernob47369_c_1.jpg";
import img3 from "../assets/images/ernob47369_c_1.jpg";
import img4 from "../assets/images/ernob47375_c_1.jpg";
import img5 from "../assets/images/frdzl54079_c_1.jpg";
import img6 from "../assets/images/frdzl54086_c_1.jpg";
import img7 from "../assets/images/frfrevr10304_c.jpg";
import img8 from "../assets/images/frfrevr10344_c.jpg";
import img9 from "../assets/images/frzol10042_c.jpg";
import img10 from "../assets/images/smgrk028_c_1.jpg";

import '../assets/css/MalabarSection.css';

const products = [
  { id: 1, title: "Malabar Gold Bracelet", code: "BRDZL40761", price: "₹ 219,810", image: bracelet },
  { id: 2, title: "Mine Diamond Earring", code: "ERGEN22987", price: "₹ 19,253", image: earrings },
  { id: 3, title: "Malabar Gold Ring", code: "FRDZL54079", price: "₹ 6,190", image: ring },
  { id: 4, title: "Malabar Gold Studs", code: "ERNOB47367", price: "₹ 35,038", image: studs },
  { id: 5, title: "Fine Made Chain", code: "CHAIN12345", price: "₹ 13,810", image: img1 },
  { id: 6, title: "Fine Made Chain", code: "CHAIN12345", price: "₹ 13,810", image: img2 },
  { id: 7, title: "Fine Made Chain", code: "CHAIN12345", price: "₹ 13,810", image: img3 },
  { id: 8, title: "Fine Made Chain", code: "CHAIN12345", price: "₹ 13,810", image: img4 },
  { id: 9, title: "Fine Made Chain", code: "CHAIN12345", price: "₹ 13,810", image: img5 },
  { id: 10, title: "Fine Made Chain", code: "CHAIN12345", price: "₹ 13,810", image: img6 },
  { id: 11, title: "Fine Made Chain", code: "CHAIN12345", price: "₹ 13,810", image: img7 },
  { id: 12, title: "Fine Made Chain", code: "CHAIN12345", price: "₹ 13,810", image: img8 },
  { id: 13, title: "Fine Made Chain", code: "CHAIN12345", price: "₹ 13,810", image: img9 },
  { id: 14, title: "Fine Made Chain", code: "CHAIN12345", price: "₹ 13,810", image: img10 },
];

const MalabarSection = () => {
  return (
    <div className="malabar-unique-container">
      <h2 className="malabar-unique-heading">One Day Shipping</h2>
      <p className="malabar-unique-subtext">
        Experience convenience with our one-day shipping.
      </p>

      <div className="malabar-unique-slider-container">
        <div className="malabar-unique-product-slider">
          {products.map((item) => (
            <div className="malabar-unique-item" key={item.id}>
              <img src={item.image} alt={item.title} className="malabar-unique-product-img" />
              <p className="malabar-unique-product-name"><strong>{item.title}</strong></p>
            </div>
          ))}
          {/* Duplicate elements for seamless scrolling */}
          {products.map((item) => (
            <div className="malabar-unique-item" key={`duplicate-${item.id}`}>
              <img src={item.image} alt={item.title} className="malabar-unique-product-img" />
              <p className="malabar-unique-product-name"><strong>{item.title}</strong></p>
            </div>
          ))}
        </div>
      </div>

      <button className="malabar-unique-view-btn">VIEW ALL PRODUCTS</button>
    </div>
  );
};

export default MalabarSection;
