//hooks
import React, { useContext } from 'react';

//component
import Button from '../button/Button.component';
import CartItem from '../cartItem/CartItem.component';

//context
import { CartContext } from '../../contexts/Cart.context';

//style
import './CartDropdown.styles.scss';



const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems !== null &&
          cartItems !== undefined &&
          cartItems.length !== 0 ? (
            cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))
          ) : null
        }
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;