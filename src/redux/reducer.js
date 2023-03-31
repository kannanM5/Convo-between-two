import { PARENT_SUBMIT, CHILD_SUBMIT } from "./actionTypes";

const initialState = {
  parentArray: [
    { msg: "Hi john", dur: "8:20 PM" },
    { msg: "How are you?", dur: "8:20 PM" },
  ],
  childArray: [
    { msg: "Hi dad...", dur: "8:23 PM" },
    { msg: "I m good", dur: "8:34 PM" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PARENT_SUBMIT:
      return {
        ...state,
        childArray: [
          ...state.childArray,
          { ...state.childArray, msg: action.payload, dur: action.time },
        ],
      };
    case CHILD_SUBMIT:
      return {
        ...state,
        parentArray: [
          ...state.parentArray,
          {
            ...state.parentArray,
            msg: action.payload,
            dur: action.time,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
