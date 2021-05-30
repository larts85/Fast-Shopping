import * as actions from "../constants-actions";

const initialState = {
  cart: [],
  products: [],
  cartProducts: [],
  total: 0,
};

export default function orderlineReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case actions.DELETE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((e) => e?.id !== action.payload),
      };
    case actions.UPDATE_CART_PRODUCT:
      return {
        ...state,
        cart: action.payload,
      };
    case actions.MODIFY_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case actions.GET_PRODUCTS_FROM_CART:
      return {
        ...state,
        cartProducts: action.payload,
      };
    case actions.EMPTY_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
}
