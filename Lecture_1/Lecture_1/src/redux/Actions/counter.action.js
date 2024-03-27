/* eslint-disable no-undef */
export const increment = () => (dispatch) => {
  dispatch({ type: "INCREMENT_COUNTER" }); 
};

export const decrement = () => (dispatch) => {
  dispatch({ type: "DECREMENT_COUNTER" }); 
};
