import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/Home.css';
import img1 from '../assets/images/slider1.jpg';
import img2 from '../assets/images/slider2.png';
import img3 from '../assets/images/slider3.png';
import img4 from '../assets/images/slider4.png';
import CategorySlider from "../components/CategorySlider";
import JewellerySection from "../components/JewellerySection";
import GemstoneJewellery from "../components/GemstoneJewellery";
import PlatinumCollection from "../components/PlatinumCollection";
import ShopByCategory from "../components/ShopByCategory";
import OurCollection from "../components/OurCollection";
import MalabarSection from "../components/MalabarSection";
import ShopByGender from "../components/ShopByGender";
// import AutoScrollingShowcase from "../components/AutoScrollingShowcase";
// import NewArrivalsSection from "../components/NewArrivalsSection";
import BridesSection from "../components/BridesSection";
import BridesOfIndia from "../components/BridesOfIndia";
import GiftingSection from "../components/GiftingSection";
import AboutStore from "../components/AboutStore";

const HomePage = () => {
  return (
    <div className="carousel-container">
      <Carousel interval={3000} pause={false}> {/* 3 seconds delay, no pause on hover */}
        <Carousel.Item>
          <img className="d-block w-100 slider-image" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 slider-image" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 slider-image" src={img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 slider-image" src={img4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
      <CategorySlider/>
      <JewellerySection/>
      <GemstoneJewellery/>
      <PlatinumCollection/>
      <ShopByCategory/>
      <OurCollection/>
      {/* <MalabarSection/> */}
      <ShopByGender/>
      {/* <AutoScrollingShowcase/> */}
      {/* <NewArrivalsSection/> */}
      <BridesSection/>
      {/* <BridesOfIndia/> */}
      <GiftingSection/>
      <AboutStore/>
      
    </div>
  );
};

export default HomePage;















