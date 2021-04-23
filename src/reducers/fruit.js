const fruitReducer = (state = 0, action) => {
  //정수
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default fruitReducer;
