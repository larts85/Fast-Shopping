import * as actions from "../constants-actions";

const setAllProducts = (products) => (dispatch) => {
  dispatch({
    type: actions.SET_PRODUCTS,
    payload: products,
  });
};

export { setAllProducts };
