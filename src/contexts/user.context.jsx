import { useEffect } from "react";
import { createContext, useState } from "react";
import {
  onAuthStateChangedListener,
  SignOutUser,
} from "../utils/firebase/firebase.utils";

// context is used to store data
// It acts like a storage

// as an actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null, // empty function
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //SignOutUser();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      //re-run when unmounts
      return unsubscribe;
    });
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
