//hooks
import React from 'react';
import { useLocation } from 'react-router-dom';

//component
import ShopItemEditForm from '../../components/shopItemEdit/ShopItemEdit.component';



const BackStageItemEdit = ({path}) => {

  const location = useLocation();

  const item = location.state && location.state.item;

  return (
    <div>
      <ShopItemEditForm item={item} path={path}/>
    </div>
  );
};

export default BackStageItemEdit;