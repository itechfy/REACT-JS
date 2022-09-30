import { USER_ACTION_TYPES } from "./user.types";

// INITIAL STATE OF THE USER
const INITIAL_STATE = {
  currentUser: null,
};

/////// IN REDUX ////////
// actions consists of type, payload

export const userReducer = (state = INITIAL_STATE, action) => {
  console.log("dispatched");
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
