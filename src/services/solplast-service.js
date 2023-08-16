export const getAllProducts = async () => {
  const URL = "https://solplast-backend.vercel.app/api/products/";
  try {
    const res = await fetch(URL);
    const products = await res.json();
    return products;
  } catch (err) {
    console.log(err);
  }
};