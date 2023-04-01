import { PARENT_SUBMIT, CHILD_SUBMIT } from "./actionTypes";

const initialState = {
  // array: [
  //   {
  //     parentMsg: "Hi john",
  //     parentDur: "8:20 PM",
  //   },
  //   { childMsg: "Hi dad...", childDur: "8:26 PM" },
  // ],

  array: [
    {
      parentMsg: "Hi john",
      parentDur: "8:20 PM",
      childMsg: "Hi dad...",
      childDur: "8:26 PM",
    },
    {
      parentMsg: "How are you",
      parentDur: "8:20 PM",
      childMsg: "i m fine...",
      childDur: "8:26 PM",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PARENT_SUBMIT:
      return {
        ...state,
        array: [
          ...state.array,
          { parentMsg: action.payload, ParentDur: action.time },
        ],
      };
    case CHILD_SUBMIT:
      return {
        ...state,
        array: [
          ...state.array,
          {
            childMsg: action.payload,
            childDur: action.time,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
