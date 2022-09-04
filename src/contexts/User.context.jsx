//hooks
import React, 
{ createContext, useState, useEffect } from "react";

//firebase
import {
  createUserDocRef,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase';



//context - 用來ininitialize Context內會有的東西, 但實際東西要在Provider內宣告
export const UserContext = createContext({

  currentUser: null, //用來儲存firebase - user, 充當localStorage
  setCurrentUser: () => {},

});

//provider
export const UserContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);

  //監控signin與signout
  useEffect(() => {

    const unsubscribe = onAuthStateChangedListener((user) => {

      //若是signin, user內會有所有user資料
      //就可以呼叫creatwUserDocRef, 並判斷是否需要寫入資料庫
      if(user){
        createUserDocRef(user);
      }
      
      //統一將setCurrentUser放在這裡管理
      setCurrentUser(user);

    });

    //useEffect的return會在component unmount時被執行
    return () => unsubscribe(); //unmount時停止監控

  }, []);

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