import ActionType from "./actionType";

const initialState = {
  value: 0,
  age: 17,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        value: state.value + 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
