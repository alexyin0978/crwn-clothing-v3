//hooks
import React, { useState, useContext } from 'react';

//context
import { ShopItemContext } from '../../contexts/ShopItem.context';

//components
import FormInput from '../../components/formInput/FormInput.component';

//firebase
import {
  POSTShopItemDoc,
} from '../../utils/firebase/firebase';



const initFormVal = {
  id: '',
  name: '',
  imageUrl: '',
  price: '',
};

const ShopItemPostForm = () => {

  const { GETShopItems } = useContext(ShopItemContext);

  const [formVal, setFormVal] = useState(initFormVal);

  const {
    id,
    name,
    imageUrl,
    price
  } = formVal;

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

    try{

      await POSTShopItemDoc(formVal);

      GETShopItems();

      resetFormInput();

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