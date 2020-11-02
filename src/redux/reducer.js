import { SAVE_COMMENT } from "./actionTypes";

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default commentReducer;