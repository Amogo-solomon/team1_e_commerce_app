import React, { useEffect, useState } from "react";
import { Iitems } from "../../interfaces/Iitems";
import "./Cart.css";
import RenderCartItem from "./RenderCartItem";
import { getTotalItemsPrice } from "../../utils/cart.utils";

const Cart = () => {
  const [AllcartItems, setAllcartItems] = useState([]);
  useEffect(() => {
    const localStorageItems = localStorage.getItem("cartArray");
    console.log("local storage is ", localStorageItems);
    if (localStorageItems === null || localStorageItems === undefined) return;
    const parsedItems = JSON.parse(localStorageItems);
    setAllcartItems(parsedItems);
  }, []);
  const [closseCart, setclosseCart] = useState<boolean>(false);
  const toggleClose = (status: boolean) => {
    setclosseCart(status);
  };
  return (
    <div className={closseCart ? "hidden" : "cartContainer"}>
      <div className="cartHeader">
        <h2>Shopping Cart Items</h2>
        <h5 onClick={() => toggleClose(true)}>X</h5>
      </div>
      <div className="">
        {AllcartItems.length !== 0 ? (
          AllcartItems.map((items: Iitems) => (
            <>
              <RenderCartItem cartItems={items} />
              <hr className="SecondaryBg" />
            </>
          ))
        ) : (
          <h4>No item in the cart yet</h4>
        )}
      </div>
      <div className="subTotal">
        <div className="cartFooter">
          <h3>SUBTOTAL: </h3>
          <h4>N {getTotalItemsPrice()} </h4>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
