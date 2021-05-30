import * as actions from "../constants-actions";

const setCreatedOrderline = (orderline) => (dispatch) => {
  dispatch({
    type: actions.ADD_PRODUCT_TO_CART,
    payload: orderline,
  });
};

const deleteCartProduct = (orderlineId) => async (dispatch) => {
  dispatch({
    type: actions.DELETE_CART_ITEM,
    payload: orderlineId,
  });
};

const updateCartProduct = (update) => async (dispatch) => {
  dispatch({
    type: actions.UPDATE_CART_PRODUCT,
    payload: update,
  });
};

const modifyTotal = (update) => async (dispatch) => {
  dispatch({
    type: actions.MODIFY_TOTAL,
    payload: update,
  });
};

export {
  setCreatedOrderline,
  updateCartProduct,
  deleteCartProduct,
  modifyTotal,
};
