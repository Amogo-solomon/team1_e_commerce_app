import { cartArray } from "../interfaces/Icart";
import { Iitems } from "../interfaces/Iitems";

// add to cart
export const addToCart = (cartItem: Iitems): void => {
  let InitialcartArray: string | null = localStorage.getItem("cartArray");
  if (InitialcartArray === null || InitialcartArray === undefined) {
    cartArray.push(cartItem);
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
  } else {
    let parsedArray = JSON.parse(InitialcartArray);
    cartArray.push(...parsedArray, cartItem);
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    alert("Item Succesfully added to cart");
  }
};

// remove item from cart
export const removeFromCart = (id: number): void => {
  let InitialcartArray: string | null = localStorage.getItem("cartArray");
  if (InitialcartArray === null || InitialcartArray === undefined) {
    console.log("error deleting your data");
  } else {
    let parsedArray: Iitems[] = JSON.parse(InitialcartArray);
    let newArray = parsedArray.filter((item) => item.id !== id);
    localStorage.setItem("cartArray", JSON.stringify(newArray));
    window.location.reload();
  }
};

// get the total price of items in the cart
export const getTotalItemsPrice = (): number => {
  let TotalItemsPrice = 0;
  let ItemsInTheCart = localStorage.getItem("cartArray");

  if (ItemsInTheCart === null || ItemsInTheCart === undefined) {
    return TotalItemsPrice;
  } else {
    let parsedItems = JSON.parse(ItemsInTheCart);
    for (let i: number = 0; i < parsedItems.length; i++) {
      TotalItemsPrice += parsedItems[i].itemPrice;
    }
    return TotalItemsPrice;
  }
};

// check if an item is in the cart or not
export const isInTheCart = (id: number): boolean => {
  let cartItems = JSON.parse(localStorage.getItem("cartArray")!);
  return cartItems.some((item: Iitems) => item.id === id) ? true : false;
};
