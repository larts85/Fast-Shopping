import * as actions from "../constants-actions";

const initialState = {
  cart: [],
  order: {},
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
    case actions.UPDATE_CART_PRODUCT:
      return {
        ...state,
        cart: action.payload,
      };
    case actions.GET_PRODUCTS_FROM_CART:
      return {
        ...state,
        cartProducts: action.payload,
      };
    case actions.GET_CART_ORDER:
      return {
        ...state,
        orderline: action.payload,
        products: action.payload.product,
      };
    case actions.EMPTY_CART:
      return {
        ...state,
      };
    case actions.DELETE_CART_ITEM:
      return {
        ...state,
        products: state.products.filter((e) => e.id !== action.payload),
      };
    case actions.MODIFY_TOTAL:
      return {
        ...state,
        total: state.total + parseInt(action.payload),
      };
    default:
      return state;
  }
}
