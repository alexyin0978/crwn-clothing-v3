//hooks
import React, { createContext, useState, useEffect } from 'react';

//firebase
import {
  GETAllCategoriesMap,
  // addAllItemsUsingBatch,
} from '../utils/firebase/firebase';

//all shop-data
// import { SHOP_DATA } from '../data/shop-data';



//context
export const ProductsContext = createContext({

  isLoading: true,
  categoriesMap: {},

});

//provider
export const ProductsContextProvider = ({children}) => {

  const [isLoading, setIsLoading] = useState(true);
  const [categoriesMap, setCategoriesMap] = useState({});

  //app mount時get categories資料
  useEffect(() => {

    const getAllCategoriesMapCallback = async () => {

      const categoriesMap = await GETAllCategoriesMap();

      setCategoriesMap(categoriesMap);
      setIsLoading(false);
    }; 

    getAllCategoriesMapCallback();

  }, []);

  //batch write all shop-items into db
  //會一直監聽SHOP_DATA的變動
  //這裡第一次寫入後先可以關掉，畢竟SHOP_DATA也不會一直改動
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
    isLoading,
    categoriesMap,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};