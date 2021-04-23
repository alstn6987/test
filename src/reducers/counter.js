import { decrementType, incrementType } from "../types";

const counterReducer = (state = 0, action) => {
  //정수
  switch (action.type) {
    case incrementType:
      return state + action.payload;
    case decrementType:
      return state - action.payload;
    default:
      return state;
  }
  // 함수조작이 길어질때
  // if(action.type === 'INCREMENT'){
  //     return state + 1;
  // }else if(action.type === 'DECREMENT'){
  //     return state -1;
  // }else{
  //     return state;
  // }
};

export default counterReducer;
