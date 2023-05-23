import { getShoppingCart } from "../utilities/fakedb";

const cartPorductsLoader = async () => {
  const storedCart = getShoppingCart();
  const ids = Object.keys(storedCart);
  console.log(ids);
  const loadedProducts = await fetch(`http://localhost:5000/productsById`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(ids),
  });
  const products = await loadedProducts.json();

  // if cart dat is in database, you have to use async await
  const savedCart = [];
  for (const id in storedCart) {
    const addedProducts = products.find((pd) => pd._id === id);

    if (addedProducts) {
      const quantity = storedCart[id];
      addedProducts.quantity = quantity;
      savedCart.push(addedProducts);
    }
  }

  // if you send to two things

  //   return [products, savedCart];

  // return {products, savedCart};

  return savedCart;
};

export default cartPorductsLoader;
