import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../Actions/ActionType";

const initialState = {
  count: 0,
  isLoading : false,
  error : null
}

export const counterReducer = (state=initialState, action) => {
  console.log(action);

  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        count: state.count + 1
      }
    case DECREMENT_COUNTER:
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}