//hooks
import React, { useContext } from 'react';

//component
import Button from '../button/Button.component';

//context
import { CartContext } from '../../contexts/Cart.context';

//styles
import './ProductCard.styles.scss';



const ProductCard = ({item}) => {

  const { addItemToCart } = useContext(CartContext);

  const { name, price, imageUrl } = item;

  const handleAddItemToCart = () => {

    addItemToCart(item);

  };

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button 
      onClick={handleAddItemToCart}
      buttonType='inverted'>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;