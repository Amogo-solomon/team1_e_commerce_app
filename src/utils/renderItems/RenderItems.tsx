import React, { useState } from "react";
import RenderImage from "../../assets/images/products/product-12.jpeg";
import "./RenderItems.css";
import { Iitems } from "../../interfaces/Iitems";
import ProductPreview from "../../components/products/ProductPreview";
import { ToggleModal } from "../ToggleModal";

const RenderItems = ({
  image,
  itemCategory,
  itemName,
  itemPrice,
  id,
}: Iitems): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggle = (showModal): void => setShowModal(ToggleModal(showModal));

  const shopdata = { image, itemCategory, itemName, itemPrice, id };

  return (
    <>
      <div className="renderItemsContainer">
        <div className="renderItemsImage">
          <img src={image} />
        </div>
        <div className="renderItemsText">
          <p>{itemCategory}</p>
          <h3> {itemName}</h3>
          <h4 className="PrimaryTextColor">N {itemPrice}</h4>
          <button className="SecondaryBg" onClick={() => toggle(showModal)}>
            Shop Now
          </button>
        </div>
      </div>
      {showModal ? (
        <ProductPreview closeModal={showModal} shopdata={shopdata} />
      ) : null}
    </>
  );
};

export default RenderItems;
