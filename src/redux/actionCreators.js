import { PARENT_SUBMIT, CHILD_SUBMIT } from "./actionTypes";

export const parent_submit = (message, time) => {
  console.log(message, time);
  return {
    type: PARENT_SUBMIT,
    payload: message,
    time: time,
  };
};

export const child_submit = (message, time) => {
  console.log(message, time);
  return {
    type: CHILD_SUBMIT,
    payload: message,
    time: time,
  };
};
