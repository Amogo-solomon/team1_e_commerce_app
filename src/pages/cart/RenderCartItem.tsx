import React, { useEffect, useState } from "react";
import { Iitems } from "../../interfaces/Iitems";
import "./RenderCartItems.css";
import { removeFromCart } from "../../utils/cart.utils";
const RenderCartItem = ({ cartItems }: { cartItems: Iitems }) => {
  return (
    <div className="rendercartItems">
      <img src={cartItems.image} />
      <div className="cartItemsDetails">
        <h3>{cartItems.itemName}</h3>
        <h3>Category: {cartItems.itemCategory}</h3>
      </div>
      <div className="cartItemsCancel">
        <h4 className="removeItem" onClick={() => removeFromCart(cartItems.id)}>
          X
        </h4>
        <h3>N {cartItems.itemPrice}</h3>
      </div>
    </div>
  );
};

export default RenderCartItem;
