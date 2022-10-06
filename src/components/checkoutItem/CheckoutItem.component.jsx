//hooks
import { useContext } from "react";

//contexts
import { CartContext } from "../../contexts/Cart.context";

//style
import "./CheckoutItem.styles.scss";



const CheckoutItem = ({cartItem}) => {

  const {name, price, quantity, imageUrl} = cartItem;

  const { 
    increaseCartItemCount,
    decreaseCartItemCount,
    removeItemFromCart,
  } = useContext(CartContext);

  const handleIncreaseItemCount = () => {
    increaseCartItemCount(cartItem);
  };

  const handleDecreaseItemCount = () => {
    decreaseCartItemCount(cartItem);
  };

  const handleRemoveItemFromCart = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecreaseItemCount}>
          &#10094;
        </div>
        <span className="value">
          {quantity}
        </span>
        <div className="arrow" onClick={handleIncreaseItemCount}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className='remove-button' onClick={handleRemoveItemFromCart}>&#10005;</div>
    </div>
  );
}
 
export default CheckoutItem;