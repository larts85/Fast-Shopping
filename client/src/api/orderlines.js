import axios from "axios";

const createOrderline = async (orderline) =>
  await axios.post(`http://localhost:4000/orderlines`, orderline);

const updateOrderline = async (update) =>
  await axios.put(`http://localhost:4000/orderlines`, update);

const deleteOrderline = async (orderlineId) =>
  await axios.delete(`http://localhost:4000/orderlines/${orderlineId}`);

export { createOrderline, updateOrderline, deleteOrderline };
