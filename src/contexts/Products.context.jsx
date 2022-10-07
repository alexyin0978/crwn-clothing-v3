//hooks
import React, { createContext, useState, useEffect } from 'react';

//firebase
import {
  GETShopItemCollection,
  addAllItemsUsingBatch,
} from '../utils/firebase/firebase';

//all shop-data
import { SHOP_DATA } from '../data/shop-data';



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
  };

  //batch write all shop-items into db -> only need to fire once
  /*
  useEffect(() => {

    try{

      addAllItemsUsingBatch('categories', SHOP_DATA);

    } catch (err) {
      console.log(err);
    }

  }, []);
  */

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