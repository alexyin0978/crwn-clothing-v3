//hooks
import React, { useState, createContext } from 'react';

//firebase
import {
  GETShopItemCollection,
} from '../utils/firebase/firebase';



//context
export const ShopItemContext = createContext({

  items: null,
  setItems: () => {},

  GETShopItems: () => {},

});

//provider
export const ShopItemContextProvider = ({children}) => {

  const [items, setItems] = useState([]);

  const GETShopItems = async () => {
    
    try{

      const res = await GETShopItemCollection();

      setItems(res);

    } catch(err){

      console.log(err);

    }

  };
  
  const value = {
    items,
    setItems,
    GETShopItems
  };

  return (
    <ShopItemContext.Provider value={value}>
      {children}
    </ShopItemContext.Provider>
  );
};