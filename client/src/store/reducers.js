import { persistCombineReducers } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import ProductsReducer from "./products/products.reducer";
import OrderReducer from "./order/order.reducer";
import OrderlineReducer from "./orderline/orderline.reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export default persistCombineReducers(persistConfig, {
  products: ProductsReducer,
  order: OrderReducer,
  orderlines: OrderlineReducer,
});
