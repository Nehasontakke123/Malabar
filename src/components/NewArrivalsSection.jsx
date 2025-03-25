import React from "react";
import solitaireRing from "../assets/images/brdzl40761_c_1.jpg";
import goldDropsEarring from "../assets/images/chdzl10055_c_1.jpg";
import gemstoneRing from "../assets/images/erdzl29078_new.jpg";
import goldChain from "../assets/images/erdzl29085-3555.jpg";
import Chain1 from "../assets/images/erdzl40980_yue.jpg";
import Chain2 from "../assets/images/erdzl43678_c13.jpg";
import Chain3 from "../assets/images/erdzl43678_c_78984.jpg";
import Chain4 from "../assets/images/erdzl43679_c_9.jpg";
import Chain5 from "../assets/images/ergen22971_c.jpg";
import Chain6 from "../assets/images/ergen22987_c.jpg";
import Chain7 from "../assets/images/frdzl49843_c1_1_77.jpg";
import Chain8 from "../assets/images/frdzl49851_c1_11.jpg";
import Chain9 from "../assets/images/frdzl54079_c_1.jpg";
import Chain10 from "../assets/images/frdzl54086_c_1.jpg";
import Chain11 from "../assets/images/frfrevr10304_c.jpg";
import Chain12 from "../assets/images/frfrevr10344_c.jpg";
import Chain13 from "../assets/images/frglr16723_2.jpg";
import Chain14 from "../assets/images/frzol10042_c.jpg";
import "../assets/css/NewArrivalsSection.css"; // Updated CSS file
import NewArrivalsSlider from "./NewArrivalsSlider";

const newArrivals = [
  { id: 1, title: "Malabar Gold Solitaire Ring", code: "FRDZL49851", price: "₹ 14,126", image: solitaireRing },
  { id: 2, title: "Divine Gold Drops Earring", code: "ERNKNGS25221", price: "₹ 94,486", image: goldDropsEarring },
  { id: 3, title: "Precia Gemstone Ring", code: "FRGLR16723", price: "₹ 65,301", image: gemstoneRing },
  { id: 4, title: "Malabar Gold Chain", code: "ERAIN12025", price: "₹ 100,121", image: goldChain },
  { id: 5, title: "Malabar Gold Chain", code: "ERAIN12025", price: "₹ 100,121", image: Chain1 },
  { id: 6, title: "Malabar Gold Chain", code: "ERAIN12025", price: "₹ 100,121", image: Chain2 },
  { id: 7, title: "Malabar Gold Chain", code: "ERAIN12025", price: "₹ 100,121", image: Chain3 },
  { id: 8, title: "Malabar Gold Chain", code: "ERAIN12025", price: "₹ 100,121", image: Chain4 },
  { id: 9, title: "Malabar Gold Chain", code: "ERAIN12025", price: "₹ 100,121", image: Chain5 },
  { id: 10, title: "Malabar Gold Chain", code: "ERAIN12025", price: "₹ 100,121", image: Chain6 },
  { id: 11, title: "Malabar Gold Chain", code: "ERAIN12025", price: "₹ 100,121", image: Chain7 },
  { id: 12, title: "Malabar Gold Chain", code: "ERAIN12025", price: "₹ 100,121", image: Chain8 },
  { id: 13, title: "Malabar Gold Chain", code: "ERAIN12025", price: "₹ 100,121", image: Chain9 },
  { id: 14, title: "Malabar Gold Chain", code: "ERAIN12025", price: "₹ 100,121", image: Chain10 },
  { id: 15, title: "Malabar Gold Chain", code: "ERAIN12025", price: "₹ 100,121", image: Chain11 },
  { id: 16, title: "Malabar Gold Chain", code: "ERAIN12025", price: "₹ 100,121", image: Chain12 },
  { id: 17, title: "Malabar Gold Chain", code: "ERAIN12025", price: "₹ 100,121", image: Chain13 },
  { id: 18, title: "Malabar Gold Chain", code: "ERAIN12025", price: "₹ 100,121", image: Chain14 },
];

const NewArrivalsSection = () => {
  return (
    <div className="new-arrivals-section">
      <h2 className="new-arrivals-title">New Arrivals</h2>
      <p className="new-arrivals-description">
        Prepare to elevate your sense of style with our latest collection!
      </p>

      <div className="new-arrivals-wrapper">
        {newArrivals.map((item) => (
          <div className="new-arrivals-box" key={item.id}>
            <img src={item.image} alt={item.title} className="new-arrivals-img" />
            <p className="new-arrivals-text">
              <strong>{item.title}</strong> <br />
              {item.code} <br />
              <span className="new-arrivals-price">{item.price}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Using Slider Component */}
      <NewArrivalsSlider items={newArrivals} />

      <button className="view-all-btn">VIEW ALL PRODUCTS</button>
    </div>
  );
};

export default NewArrivalsSection;
