import axios from "axios";

// Config URL to be consumed using axios fetch request
const api = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 6000,
});

// to fetch main page products list
export const fetchProducts = async () => {
  const { data } = await api.get("api/products");
  return data;
};

// to fetch main details from product page
export const fetchProduct = async (id) => {
  const { data } = await api.get(`api/products/${id}`);
  return data;
};
