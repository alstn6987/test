import {
  decrementAsyncType,
  decrementType,
  incrementAsyncType,
  incrementType,
} from "../types";

export const increment = (num) => ({ type: incrementType, payload: num });
export const decrement = (num) => ({ type: decrementType, payload: num });

export const incrementAsync = (num) => {
  return (dispatch) => {
    setTimeout(() => dispatch(increment(num)), 1000);
  };
};
//1000ms의 딜레이 이후 원하는 num 만큼 값을 조정하려고 한다. 이때 num 전달을 위해서는?
//1. 새 리듀서를 만들어서 해결한다.
//2. 미들웨어를 사용-> 어떻게?? num 값을 스토어에 넣고 이를 전달?

export const decrementAsync = (num) => ({
  type: decrementAsyncType,
  payload: num,
});

// // 증가함수
// export const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// // 감소함수
// export const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// export const incrementAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(increment);
//   }, 1000);
// };

// export const decrementAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(decrement);
//   }, 1000);
// };
