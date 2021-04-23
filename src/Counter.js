import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync,
} from "./actions";

function Counter() {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          dispatch(incrementAsync(3));
        }}
      >
        +1
      </button>
      <button onClick={() => dispatch(decrementAsync(3))}>-1</button>
    </>
  );
}
export default Counter;
