//hooks
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

//components
import ShopItemPostForm from '../../components/shopItemPost/ShopItemPost.component';
import ShopItemsCollection from '../../components/shopItemsCollection/ShopItemsCollection.component';

//firebase
import {
  PUTShopItemDoc,
} from '../../utils/firebase/firebase';



//用來當後台管理 -> 上傳json資料到firestore
const BackStage = ({ path }) => {

  const location = useLocation();

  const itemId = location.state && location.state.itemId;

  const [open, setOpen] = useState(false);

  return (
    <>
      <ShopItemPostForm />
      {open && <ShopItemsCollection path={path}/>}
      <button onClick={() => setOpen(prevState => !prevState)}>
        show shop items
      </button>
      { itemId && <Outlet /> }
    </>
  );
};

export default BackStage;