import axios from "axios";

const fetchAllProducts = async () =>
  await axios.get("http://localhost:4000/products");

export { fetchAllProducts };
