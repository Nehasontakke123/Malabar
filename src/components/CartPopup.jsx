import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/CartPopup.css";

const CartPopup = ({ onClose }) => {
    const navigate = useNavigate();
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const storedProducts = localStorage.getItem("cartProducts");
        if (storedProducts) {
            setCartProducts(JSON.parse(storedProducts));
        }
    }, []);

    const handleRemove = (index) => {
        let updatedCart = [...cartProducts];
        updatedCart.splice(index, 1);
        localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
        setCartProducts(updatedCart);
    };

    return (
        <div className="cart-popup">
            <div className="cart-popup-content">
                <h2>3 Items In Cart</h2>
                <button className="close-btn" onClick={onClose}>✖</button>
                <div className="cart-items">
                    {cartProducts.map((product, index) => (
                        <div key={index} className="cart-item">
                            <img src={product.images?.[0] || product.image} alt={product.name} />
                            <div>
                                <h4>{product.name}</h4>
                                <p>₹ {product.price}</p>
                            </div>
                            <button className="remove-btn" onClick={() => handleRemove(index)}>🗑</button>
                        </div>
                    ))}
                </div>
                <h3>SubTotal: ₹{cartProducts.reduce((acc, p) => acc + Number(p.price), 0)}</h3>
                <button className="view-cart-btn" onClick={() => navigate("/checkout")}>View Cart</button>
            </div>
        </div>
    );
};

export default CartPopup;
