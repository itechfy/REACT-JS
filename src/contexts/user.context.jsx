import { createContext, useState } from "react";

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

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
