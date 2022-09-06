//hooks
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//context
import { ShopItemContext } from '../../contexts/ShopItem.context';

//components
import FormInput from '../../components/formInput/FormInput.component';

//firebase
import {
  PUTShopItemDoc,
} from '../../utils/firebase/firebase';



const initFormVal = {
  id: '',
  name: '',
  imageUrl: '',
  price: '',
};

const ShopItemPostForm = ({item, path}) => {

  const { GETShopItems } = useContext(ShopItemContext);

  const navigate = useNavigate();

  const [formVal, setFormVal] = useState(item || initFormVal);

  const {
    id,
    name,
    imageUrl,
    price
  } = formVal;

  useEffect(() => {
    setFormVal({...item});
  }, [item.id]);

  const resetFormInput = () => {
    setFormVal(initFormVal);
  };

  const handleInputChange = (evt) => {

    const { name, value } = evt.target;

    setFormVal({...formVal, [name]: value});

  };

  const onFormSubmit = async (evt) => {
    
    //取消預設, 才不會在submit後reload
    evt.preventDefault();
    
    try {
      
      await PUTShopItemDoc(formVal);

      GETShopItems();

      navigate(`/${path}`);

      window.scrollTo(0,0);

    } catch(err) {

      console.log(err);

    }
  };

  return (
    <div className='backStage-container'>
      <div className='shop-item-form-container'>
        <form onSubmit={onFormSubmit}>

          {/* id */}
          <FormInput 
          name='id'
          label='Id'
          type='text'
          value={id}
          onChange={handleInputChange}
          disabled
          required
          />
          {/* name */}
          <FormInput 
          name='name'
          label='Name'
          type='text'
          value={name}
          onChange={handleInputChange}
          required
          />
          {/* imageUrl */}
          <FormInput 
          name='imageUrl'
          label='Image Url'
          type='text'
          value={imageUrl}
          onChange={handleInputChange}
          required
          />
          {/* price */}
          <FormInput 
          name='price'
          label='Price'
          type='text'
          value={price}
          onChange={handleInputChange}
          required
          />
          <button type='submit'>
            Submit
          </button>

        </form>
      </div>
    </div>
  )
}

export default ShopItemPostForm;