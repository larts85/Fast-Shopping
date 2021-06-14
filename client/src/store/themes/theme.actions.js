import * as actions from "../constants-actions";

const setMode = (mode) => (dispatch) => {
  dispatch({
    type: actions.SET_MODE,
    payload: mode,
  });
};

const setBorders = (rounded) => (dispatch) => {
  dispatch({
    type: actions.SET_MODE,
    payload: rounded,
  });
};

export { setMode, setBorders };
