import React, { useEffect } from "react";
import "../assets/css/Video.css"; 

const Video = () => {
  useEffect(() => {
    const heading = document.querySelector(".showcase-heading span");
    if (heading) {
      for (let i = 0; i < 6; i++) {
        let sparkle = document.createElement("div");
        sparkle.classList.add("sparkle-effect");

        let randomX = Math.random() * 80 - 40; // Random X-axis shift
        let randomY = Math.random() * 50 - 25; // Random Y-axis shift
        let delay = Math.random() * 2; // Different delays for each

        sparkle.style.left = `${randomX}px`;
        sparkle.style.top = `${randomY}px`;
        sparkle.style.animationDelay = `${delay}s`;

        heading.appendChild(sparkle);
      }
    }
  }, []);

  return (
    <div className="brides-showcase-video">
   <h2 className="show-the-way">It's time to #ShowTheWay</h2>

    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
      <div className="video-overlay">It's time to #ShowTheWay</div>
    </div>
  </div>
  
  );
};

export default Video;
