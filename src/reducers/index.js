import { combineReducers } from "redux";
import counterReducer from "./counter";
import fruitReducer from "./fruit";

const allReducer = combineReducers({
  counterReducer: counterReducer,
});

export default allReducer;
