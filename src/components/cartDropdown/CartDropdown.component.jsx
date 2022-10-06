//hooks
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

//component
import Button from '../button/Button.component';
import CartItem from '../cartItem/CartItem.component';

//context
import { CartContext } from '../../contexts/Cart.context';

//style
import './CartDropdown.styles.scss';



const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    navigate('/checkout');
  }

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
          ) : <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      <div className='button'>
        <Button onClick={handleGoToCheckout}>
          CHECKOUT
        </Button>
      </div>
    </div>
  );
};

export default CartDropdown;