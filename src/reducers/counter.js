import { decrementType, incrementType } from "../types";

const counterReducer = (state = {}, action) => {
  //정수
  switch (action.type) {
    case incrementType:
      //item []
      return {
        ...state,
        items: state.items.map((user) =>
          user.id === action.id ? { ...user, asdas } : user
        ),
      };
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
  // }else{asdasdsdasdasdasdasdasdd
  //     return state;
  // }
};

export default counterReducer;
