import { FETCH_ALL_COMMENTS, SAVE_COMMENT } from "./actionTypes";

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_COMMENTS:
      return [...action.payload];
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default commentReducer;
