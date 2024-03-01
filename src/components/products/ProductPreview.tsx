import React, { useState } from "react";
import { Iitems } from "../../interfaces/Iitems";
import "./ProductPreview.css";
import { DecrementValue, IncrementValue } from "../../utils/values.utils";
import { addToCart } from "../../utils/cart.utils";
const ProductPreview = ({
  closeModal,
  shopdata,
}: {
  closeModal: boolean;
  shopdata: Iitems;
}) => {
  const [ShouldcloseModal, setShouldcloseModal] = useState<boolean>(closeModal);
  const [itemValue, setitemValue] = useState<number>(1);
  const handleClick = () => {
    setShouldcloseModal(!ShouldcloseModal);
  };
  const addvalue = (initialValue: number): void => {
    setitemValue(IncrementValue(initialValue));
  };
  const subvalue = (initialValue: number): void => {
    setitemValue(DecrementValue(initialValue));
  };
  return (
    <div className={!ShouldcloseModal ? "hidden" : "previewContainer"}>
      <button className={"toggleCloseOpen"} onClick={() => handleClick()}>
        X
      </button>
      <div className="previewImage">
        <img src={shopdata.image} className="" />
      </div>
      <div className="previewDescription">
        <div className="productDesc">
          <h1>{shopdata.itemName}</h1>
          <h3>{shopdata.itemCategory}</h3>
          <h3>N {shopdata.itemPrice * itemValue}</h3>
        </div>
        <div className="addToCartContainer">
          <div className="increment_decrement">
            <button onClick={() => subvalue(itemValue)}> - </button>
            <p> {itemValue} </p>
            <button onClick={() => addvalue(itemValue)}> + </button>
          </div>
          <button
            className="addtoCartBtn"
            onClick={() => {
              shopdata.itemPrice *= itemValue;
              addToCart(shopdata);
              handleClick();
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
