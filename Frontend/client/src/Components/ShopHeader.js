import React from "react";
import "./ShopHeader.css";
import { Link } from "react-router-dom";
const ShopHeader = ({cartItems}) => {
  return (
    <header className="shopHeader">
      <div className="leftSide">
        <h1>Products </h1>
      </div>
      <div className="rightSide">
        <Link to="/cart" className="cart">
        <i className="fas fa-shopping-cart"></i>      
        <span className="cart-length">
        {cartItems.length === 0 ? "" : cartItems.length }
        </span>
          </Link>
      </div>
    </header>
  );
};

export default ShopHeader;