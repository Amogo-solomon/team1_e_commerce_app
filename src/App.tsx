import { FC, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import ProductPreview from "./components/products/ProductPreview";
import { cartArray } from "./interfaces/Icart";
import Cart from "./pages/cart/Cart";

const App: FC = () => {
  useEffect(() => {
    let checkcartArray = localStorage.getItem("cartArray");
    if (!checkcartArray) {
      localStorage.setItem("cartArray", JSON.stringify(cartArray));
    }
  }, []);
  return (
    <>
      <Cart />
    </>
  );
};

export default App;
