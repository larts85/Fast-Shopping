import * as actions from "../constants-actions";
import { updateProductStock } from "../orderline/orderline.actions";

const initialState = {
  products: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_PRODUCTS:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
}
