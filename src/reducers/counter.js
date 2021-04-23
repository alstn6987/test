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
};

export default counterReducer;
