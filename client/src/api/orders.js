import axios from "axios";

export const finishOrder = async (order) =>
  await axios.post("http://localhost:4000/orders", order);
