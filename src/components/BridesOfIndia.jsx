import React from "react";
import "../assets/css/BridesOfIndia.css"; // Common CSS Import

// import bride from '../assets/images/BrideImg.jpg'
import newBrideImg from '../assets/images/BrideImg.jpg';
import BridesForm from './BridesForm'
import BridesShowcase from "./BridesShowcase";
import Video from "./Video";
import MalabarPromise from "./MalabarPromise";

const brides = [
  { id: 1, name: "", image:newBrideImg},
];

const BridesOfIndia = () => {
  return (
    <div className="brides-india-container">
      {/* Banner Section */}
      <div className="brides-india-banner">
        {/* <h1>#ShowTheWay</h1> */}
      </div>

      {/* Brides List */}
      <div className="brides-india-list">
        {brides.map((bride) => (
          <div key={bride.id} className="brides-india-card">
            <img src={bride.image} alt={bride.name} className="brides-india-img" />
            <p className="brides-india-name">{bride.name}</p>
          </div>
        ))}
      </div>
      <BridesForm/>
      <BridesShowcase/>
      <Video/>
      <MalabarPromise/>
    </div>
  );
};

export default BridesOfIndia;