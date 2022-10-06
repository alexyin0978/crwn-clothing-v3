//hooks
import React, { useContext } from 'react';

//context
import { CartContext } from '../../contexts/Cart.context';

//images
import { ReactComponent as ShoppingCartIcon } from '../../assets/navbar/shopping-bag.svg';

//style
import './CartIcon.styles.scss';



const CartIcon = () => {

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  return (
    <div className='cart-icon-container' onClick={toggleCartOpen}>
      <ShoppingCartIcon className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;