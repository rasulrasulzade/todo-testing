import commentReducer from "./reducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  comments: commentReducer,
});
export default createStore(rootReducer);
