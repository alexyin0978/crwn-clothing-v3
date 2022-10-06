//hooks
import { useContext } from "react";

//context
import { CartContext } from "../../contexts/Cart.context";

//components
import CheckoutItem from '../../components/checkoutItem/CheckoutItem.component';

//style
import './Checkout.styles.scss';



const Checkout = () => {

  const { cartItems, cartPriceTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.length ? (
          cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : null
      }
      <span className="total">{`Total price: ${cartPriceTotal}`}</span>
    </div>
  );
}
 
export default Checkout;