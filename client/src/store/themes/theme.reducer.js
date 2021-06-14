import * as actions from "../constants-actions";

const initialState = {
  darkMode: true,
  rounded: false,
};

export default function themesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_MODE:
      return {
        ...state,
        mode: action.payload.darkMode,
      };
    case actions.SET_BORDER:
      return {
        ...state,
        corner: action.payload.rounded,
      };
    default:
      return state;
  }
}
