//hooks
import React from 'react';

//component
import Button from '../button/Button.component';

//styles
import './ProductCard.styles.scss';



const ProductCard = ({item}) => {

  const { name, price, imageUrl } = item;

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Add to cart</Button>
    </div>
  );
};

export default ProductCard;