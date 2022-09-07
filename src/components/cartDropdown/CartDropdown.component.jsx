//hooks
import React from 'react';

//component
import Button from '../button/Button.component';

//style
import './CartDropdown.styles.scss';



const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;