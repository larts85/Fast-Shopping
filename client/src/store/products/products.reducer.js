import * as actions from "../constants-actions";

const initialState = {
  products: [],
  product: {},
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case actions.GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    // case actions.UPDATE_STOCK:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };
    default:
      return state;
  }
}
