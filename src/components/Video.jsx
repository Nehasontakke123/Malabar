import React, { useEffect } from "react";
import "../assets/css/Video.css"; // वेगळा CSS वापरण्यासाठी

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
      <h2 className="showcase-heading">
        It's time to <span>#ShowTheWay</span>
      </h2>
      <div className="video-container">
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/G4o-Y01r-bY"
          title="Brides of India 2023 | Featuring Alia Bhatt & Anil Kapoor | Malabar Gold and Diamonds"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
