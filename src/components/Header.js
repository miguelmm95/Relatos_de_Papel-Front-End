import React, { useState, useContext } from "react";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const Header = () => {

  const navigate = useNavigate();
  const { cart, cartLenght } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleClick = () => {
    navigate("/Cart");
  };

  const handleMouse = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleNavigate = () => {
    navigate("/books");
  };

  return (
    <div className="header">
        <h1 className="header_text" onClick={handleNavigate}>Relatos de papel</h1>
        <div className="header_searchBar">
            <input className="header_searchBar_text" type="text" placeholder="Buscar..." />
            <button className="header_searchBar_button">Buscar</button>

            <div className="header_cart" 
            onMouseEnter={handleMouse} 
            onMouseLeave={handleMouse}>
              <i id="header_cart_icon" class="bi bi-cart4" onClick={handleClick}></i>
              <p className="header_cart_length">{cartLenght}</p>
              {isCartVisible && (
                <div className="header_cart_preview">
                  <ul>
                    {cart.map(item => (
                      <li>
                        {item.title} - {item.amount}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
        </div>
    </div>
  );
}