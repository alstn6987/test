import { decrementAsyncType, incrementAsyncType } from "../types";

const initialState = {};

const counterAsyncReducer = (state = 0, action) => {
  switch (action.type) {
    case incrementAsyncType:
      return state + action.payload;
    case decrementAsyncType:
      return state - action.payload;
    default:
      return state;
  }
};
//
export default counterAsyncReducer;
