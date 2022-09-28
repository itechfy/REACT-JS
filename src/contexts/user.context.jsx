import { useEffect } from "react";
import { createContext, useReducer } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// context is used to store data
// It acts like a storage

// as an actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null, // empty function
});

//
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

/////// IN REDUX ////////
// actions consists of type, payload

const userReducer = (state, action) => {
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
      throw new Error(`Unhandled ${type} in userReducer`);
  }
};

// INITIAL STATE OF THE USER
const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  //const [currentUser, setCurrentUser] = useState(null);
  ///////////////////////
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser);
  const setCurrentUser = (user) => {
    dispatch({
      type: USER_ACTION_TYPES.SET_CURRENT_USER,
      payload: user,
    });
  };

  //SignOutUser();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    });
  }, []);

  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
