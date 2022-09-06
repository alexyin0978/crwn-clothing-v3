//hooks
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

//firebase
import {
  DELETEShopItemDoc,
} from '../../utils/firebase/firebase';

//context
import { ShopItemContext } from '../../contexts/ShopItem.context';



const ShopItemsCollection = ({ path }) => {

  const { items, GETShopItems } = useContext(ShopItemContext);

  const navigate = useNavigate();

  useEffect(() => {

    GETShopItems();

  }, []);

  const handleItemDelete = async (id) => {

    await DELETEShopItemDoc(id);

    GETShopItems();

  };

  const handleItemEdit = async (item) => {
      
      navigate(`${item.id}`, {state: {itemId: item.id, item: item}}); //打開edit form

  };

  return (
    <div style={{marginTop: 50}}>
      {
        items &&
        items !== null &&
        items !== undefined &&
        items.length !== 0 ? (
          items.map(item => {
            return (
              <div key={item.id}>
                <li>{item.id}</li>
                <li>{item.name}</li>
                <img src={item.imageUrl} />
                <li>{item.price}</li>
                <button onClick={() => handleItemDelete(item.id)}>
                  Delete
                </button>
                <button onClick={() => handleItemEdit(item)}>
                  Edit
                </button>
              </div>
            )
          })
        ) : <div>Still empty</div>
      }
    </div>
  );
};

export default ShopItemsCollection;