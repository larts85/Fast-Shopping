import * as actions from "../constants-actions";

const setCreatedOrder = (order) => (dispatch) => {
  dispatch({
    type: actions.CREATE_ORDER,
    payload: order,
  });
};

const deleteOrder = () => async (dispatch) => {
  dispatch({
    type: actions.DELETE_ORDER,
  });
};

export { setCreatedOrder, deleteOrder };
