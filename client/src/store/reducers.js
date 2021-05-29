import { combineReducers } from "redux";
import ProductsReducer from "./products/products.reducer";
import OrderReducer from "./order/order.reducer";
import OrderlineReducer from "./orderline/orderline.reducer";

export default combineReducers({
  productsReducer: ProductsReducer,
  orderReducer: OrderReducer,
  orderline: OrderlineReducer,
});
