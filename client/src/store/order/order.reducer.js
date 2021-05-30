import * as actions from "../constants-actions";

const initialState = {
  order: {},
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case actions.DELETE_ORDER:
      return {
        ...state,
      };
    default:
      return state;
  }
}
