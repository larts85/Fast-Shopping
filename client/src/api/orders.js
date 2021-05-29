import axios from "axios";

const softDeleteOrder = async (orderId) =>
  await axios.put(`http://localhost:4000/orders${orderId}`);

export { softDeleteOrder };
