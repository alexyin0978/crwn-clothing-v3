//hooks
import React, { createContext, useState } from "react";



//context - 用來ininitialize Context內會有的東西, 但實際東西要在Provider內宣告
export const UserContext = createContext({

  currentUser: null, //用來儲存firebase - user, 充當localStorage
  setCurrentUser: () => {},

});

//provider
export const UserContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);

  const value = {
    currentUser,
    setCurrentUser
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};