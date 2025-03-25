import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/BridesShowcase.css";
import MainImg1 from "../assets/images/Bejeweled.jpg";
import MainImg2 from "../assets/images/Enchanting.jpg";
import MainImg3 from "../assets/images/show-stopper.jpg";
import MainImg4 from "../assets/images/trendsetter.jpg";
import MainImg5 from "../assets/images/Dazzling32.jpg";
import MainImg6 from "../assets/images/6_regal.jpg";
import MainImg7 from "../assets/images/7_Elegant.jpg";
import MainImg8 from "../assets/images/8_Mararashtrian.jpg";
import MainImg9 from "../assets/images/9_Tamil.jpg";
import MainImg10 from "../assets/images/10_odiya.jpg";
import MainImg11 from "../assets/images/11_Punjabi.jpg";
import MainImg12 from "../assets/images/12_gujarati.jpg";
import MainImg13 from "../assets/images/Bengal.jpg";
import MainImg14 from "../assets/images/Bihari.jpg";


const brides = [
  { id: 1, name: "Bejeweled Bride", image: MainImg1 },
  { id: 2, name: "Show-stopper Bride", image: MainImg2 },
  { id: 3, name: "Enchanting Bride", image: MainImg3 },
  { id: 4, name: "Trendsetter Bride", image: MainImg4 },
  { id: 5, name: "Dazzling Bride", image: MainImg5 },
  { id: 6, name: "Regal Bride", image: MainImg6 },
  { id: 7, name: "Elegant Bride", image: MainImg7 },
  { id: 8, name: "Mararashtrian Bride", image: MainImg8 },
  { id: 9, name: "Tamil Bride", image: MainImg9 },
  { id: 10, name: "Odiya Bride", image: MainImg10 },
  { id: 11, name: "Punjabi Bride", image: MainImg11 },
  { id: 12, name: "Gujarati Bride", image: MainImg12 },
  { id: 13, name: "Bengali Bride", image: MainImg13 },
  { id: 14, name: "Bihari Bride", image: MainImg14 },
];

const BridesShowcase = () => {
  const navigate = useNavigate();

  const handleBrideClick = (id) => {
    navigate(`/bride/${id}`);
  };

  useEffect(() => {
    const createFlower = () => {
      const flower = document.createElement("div");
      flower.classList.add("flower");
      
      const randomLeft = Math.random() * window.innerWidth;
      const randomDuration = Math.random() * 3 + 2;
      
      flower.style.left = `${randomLeft}px`;
      flower.style.animationDuration = `${randomDuration}s`;
  
      const container = document.querySelector(".brides-showcase-container");
      if (container) {
        container.appendChild(flower);
      }
  
      setTimeout(() => {
        flower.remove();
      }, randomDuration * 1000);
    };
  
    const interval = setInterval(createFlower, 300);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="brides-showcase-container">
      <h2 className="brides-showcase-title">Meet the Malabar Brides of India</h2>
      <p className="brides-showcase-description">
        They hold traditions close to their heart but express themselves in their unique vibrant styles.
      </p>
      <p className="brides-showcase-full-description">
        Every bride showcased in the edition of Malabar Bride’s Of India is not just the showstopper, 
        she's the show-runner as well. For she's the new-age bride of India. With her hands firmly 
        behind the wheel of her own journey, she decides how her story is going to be. While she is 
        paving her way to happiness, she is also inspiring everyone with her confidence. This is her moment, 
        and she's going to have her say. From here on, she's going to <strong>#ShowTheWay</strong>.
      </p>

      <div className="brides-showcase-list">
        {brides.map((bride) => (
          <div 
            key={bride.id} 
            className="brides-showcase-card" 
            onClick={() => handleBrideClick(bride.id)}
            style={{ cursor: "pointer" }}
          >
            <img src={bride.image} alt={bride.name} className="brides-showcase-img" />
            <p className="brides-showcase-name">{bride.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BridesShowcase;
