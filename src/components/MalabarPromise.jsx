import React from "react";
import "../assets/css/MalabarPromise.css";

const promises = [
  { title: "100% VALUE ON DIAMOND EXCHANGE", description: "Assured 100% exchange value for diamond jewellery." },
  { title: "100% VALUE ON GOLD EXCHANGE", description: "We give you full value, without any deductions, when you exchange gold jewellery purchased from us." },
  { title: "COMPLETE TRANSPARENCY", description: "Totally transparent and detailed invoice and price tag." },
  { title: "TESTED & CERTIFIED DIAMONDS", description: "Every diamond passes through 28 internal quality tests and is also certified by international labs." },
  { title: "GUARANTEED BUYBACK", description: "We offer the best buyback value for gold & diamond jewellery." },
  { title: "HALLMARKED PURE GOLD", description: "All our gold jewellery holds hallmark certification, a guarantee of purity." },
  { title: "FAIR LABOUR PRACTICES", description: "Fair wages, benefits and working conditions for karigars." },
  { title: "ASSURED LIFETIME MAINTENANCE", description: "We assure lifetime maintenance for jewellery from all our 370+ showrooms across 13 countries." },
  { title: "FAIR PRICE POLICY", description: "Reasonable making charges for all jewellery which assures best value for purchase." },
  { title: "RESPONSIBLY SOURCED PRODUCTS", description: "Sourced in a responsible manner to protect the environment and stakeholders, for it to be truly auspicious." }
];

const MalabarPromise = () => {
  return (
    <div className="malabar-promise-container">
      <h2 className="promise-heading">MALABAR <span>PROMISE</span></h2>
      <div className="promise-grid">
        {promises.map((promise, index) => (
          <div key={index} className="promise-card">
            <h3>{promise.title}</h3>
            <p>{promise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MalabarPromise;
