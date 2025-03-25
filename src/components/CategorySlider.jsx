import React, { useRef } from "react";
import "../assets/css/CategorySlider.css";

// Images Import (Ensure these files exist in the correct location)
import img1 from "../assets/images/best-seller.png";
import img2 from "../assets/images/new-arrivals.png";
import img3 from "../assets/images/gold-coins.png";
import img4 from "../assets/images/gold-pendant.png";
import img5 from "../assets/images/silver-bars.jpg";
import img6 from "../assets/images/Gold-Jhumka.png";
import img7 from "../assets/images/solitare.png";
import img8 from "../assets/images/Bangle.png";
import img9 from "../assets/images/Offer.png";
import img10 from "../assets/images/mangalsutra.png";
import img11 from "../assets/images/Chain.png";

// Category Data
const categories = [
    { image: img1, name: "Best Sellers" },
    { image: img2, name: "New Arrivals" },
    { image: img3, name: "Coins & Bars" },
    { image: img4, name: "Coin Pendants" },
    { image: img5, name: "Silver Coins" },
    { image: img6, name: "Gold Jhumka" },
    { image: img7, name: "Rings" },
    { image: img8, name: "Bangles" },
    { image: img9, name: "Earrings" },
    { image: img10, name: "Mangalsutra" },
    { image: img11, name: "Gold Chains" },
];

const CategorySlider = () => {
    const sliderRef = useRef(null);

    // Handle category click without useNavigate
    const handleCategoryClick = (category) => {
        if (!category) {
            console.error("Category name is undefined");
            return;
        }
        const formattedCategory = category.toLowerCase().replace(/\s+/g, "-");
        window.location.href = `/category/${formattedCategory}`;
    };

    return (
        <div className="slider-container">
            <div ref={sliderRef} className="slider">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="category-item"
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        {category.image ? (
                            <img src={category.image} alt={category.name} className="category-image" />
                        ) : (
                            <div className="category-placeholder">Image Not Found</div>
                        )}
                        <p className="category-name">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySlider;
