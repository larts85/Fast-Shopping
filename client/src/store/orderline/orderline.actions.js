import * as actions from "../constants-actions";

const setCreatedOrderline = (orderline) => (dispatch) => {
  dispatch({
    type: actions.CREATE_ORDER,
    payload: orderline,
  });
};

const updateCartProduct = (update) => async (dispatch) => {
  dispatch({
    type: actions.UPDATE_CART_PRODUCT,
    payload: update,
  });
};

export { setCreatedOrderline, updateCartProduct };
