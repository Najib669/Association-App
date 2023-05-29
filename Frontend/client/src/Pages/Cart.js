import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
  handleTotalPrice
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart is empty</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems.length} articles in the cart{" "}
        </div>
      )}

      <div className="clear-cart">
        {cartItems.length >= 1 ? (
          <button className="clear-cart-button" onClick={handleCartClearance}>
            {" "}
            Clear Cart
          </button>
        ) : (
          <></>
        )}
      </div>
      <div>
        {cartItems.map((item) => (
          <div key={item._id} className="cart-items-list">
            <img
              className="cart-items-image"
              src={item.imgUrl}
              alt={item.productame}
            />
            <div className="cart-items-name">{item.productName}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price"></div>
            <div className="cart-items-quantity">
              {item.quantity} * {item.price} DT
            </div>
          </div>
        ))}
      </div>
      <div className="cart-items-total-price-name">
        Total Price
        <div className="cart-items-total-price"> {totalPrice} DT</div>
        
      </div>
      <div className="pay">
        <Link to="/checkout">
          <button className="pay-check" variant="success" onClick={handleTotalPrice(totalPrice)}>
            checkout
          </button>
        </Link>
      </div>
      
    </div>
  );
};

export default Cart;
