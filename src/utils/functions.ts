import { IProduct } from "../interfaces";

export const addItemToShoppingCart = (
  cartItem: IProduct[],
  product: IProduct
) => {
  const existingItem = cartItem.find(
    (item) =>
      item.name === product.name &&
      item.color === product.color &&
      item.count === product.count &&
      item.size === product.size
  );
  

  if (existingItem) {
   
    // If the item with the same name and color exists, increase its quantity
    return cartItem.map((item) =>
      item.name === product.name &&
      item.count === product.count &&
      item.color === product.color &&
      item.size === product.size
        ? { ...item, qty: item.qty + 1 }
        : item
    );
  } else {
    // If the item doesn't exist, add it to the cart with a quantity of 1
    return [...cartItem, { ...product, qty: 1 }];
  }
};
