//hooks
import React, { createContext, useState } from 'react';

//firebase
import {
  GETShopItemCollection,
} from '../utils/firebase/firebase';

//context
export const ProductsContext = createContext({

  items: null,
  setItems: () => {},

  loading: true,
  setLoading: () => {},

  GETShopItems: () => {},

});

//provider
export const ProductsContextProvider = ({children}) => {

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const GETShopItems = async() => {

    try{

      const res = await GETShopItemCollection();

      setItems(res);

      setLoading(false);

    } catch(err){

      console.log(err);

    }
  }

  const value = {
    items,
    setItems,
    GETShopItems,
    loading,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};