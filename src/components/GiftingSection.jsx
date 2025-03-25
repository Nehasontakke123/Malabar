import React from "react";
import Swal from "sweetalert2";
import confetti from "canvas-confetti"; // Confetti import
import birthday from "../assets/images/Birthday.jpg";
import anniversary from "../assets/images/anniversary.jpg";
import babyBirth from "../assets/images/baby-birth.jpg";
import festiveCollection from "../assets/images/festive.jpg";
import personalisedJewellery from "../assets/images/Personalized.jpg";
import customizedJewellery from "../assets/images/Customized.jpg";
import "../assets/css/GiftingSection.css";

const GiftingSection = () => {
  const giftingItems = [
    { id: 1, title: "", img: birthday, message: "Celebrate birthdays with Malabar's exclusive jewellery gifts!" },
    { id: 2, title: "", img: anniversary, message: "Make your anniversary memorable with our stunning jewellery!" },
    { id: 3, title: "", img: babyBirth, message: "Welcome your newborn with Malabar’s precious gifts!" },
    { id: 4, title: "", img: festiveCollection, message: "Brighten your festivals with Malabar’s festive jewellery!" },
    { id: 5, title: "", img: personalisedJewellery, message: "Create your unique style with personalized Malabar jewellery!" },
    { id: 6, title: "", img: customizedJewellery, message: "Design your dream jewellery with Malabar’s customization options!" },
  ];

  // 🎆 Confetti Function
  const launchConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  // 🛒 Handle Gift Click
  const handleGiftClick = (item) => {
    launchConfetti(); // Click केल्यावर Confetti चालेल

    Swal.fire({
      title: item.title,
      text: item.message,
      imageUrl: item.img,
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: item.title,
      showCancelButton: true,
      confirmButtonText: "Add to Cart 🛒",
      confirmButtonColor: "#d4af37",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.isConfirmed) {
        addToCart(item);
      }
    });
  };

  
const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  
    // 🛒 Custom Event Emit करतोय
    window.dispatchEvent(new Event("cartUpdated"));
  
    Swal.fire({
      title: "Added to Cart!",
      text: `${item.title} has been added to your cart.`,
      icon: "success",
      confirmButtonColor: "#d4af37",
    });
  };
  

  return (
    <div className="gifting-section">
      <h2 className="section-title">Gifting & More</h2>
      <p className="section-subtitle">Gifts that mark a moment</p>
      <div className="gifting-grid">
        {giftingItems.map((item) => (
          <div key={item.id} className="gift-card" onClick={() => handleGiftClick(item)}>
            <img src={item.img} alt={item.title} className="gift-image" />
            <p className="gift-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftingSection;
