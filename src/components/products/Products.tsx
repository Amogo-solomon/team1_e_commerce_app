import React from "react";

import "./Products.css";
import { ProductsData } from "../../assets/data/Products";
import { Iitems } from "../../interfaces/Iitems";
import RenderItems from "../../utils/renderItems/RenderItems";

const Products = () => {
  return (
    <div className="productsContainer">
      <div className="products">
        {ProductsData.map(
          (item: Iitems): JSX.Element => (
            <RenderItems
              image={item.image}
              itemCategory={item.itemCategory}
              itemName={item.itemName}
              itemPrice={item.itemPrice}
              id={item.id}
            />
          
          )
        )}
      </div>
    </div>
  );
};

export default Products;
