import { getStoredCart } from "../utils/fakeDB";

export const getCartAndProductsData = async () => {
  const response = await fetch("products.json");
  const products = await response.json();

  const savedCart = getStoredCart();
  const initialCart = [];

  for (const id in savedCart) {
    const exist = products.find((product) => product.id === id);
    if (exist) {
      const quantity = savedCart[id];
      exist.quantity = quantity;
      initialCart.push(exist);
    }
  }
  return { products, initialCart };
};
