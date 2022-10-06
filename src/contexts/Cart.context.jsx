import React, { 
  createContext, 
  useState,
  useEffect,
} from 'react';



//helper function - addCartItem
const addCartItem = (cartItems, productToAdd) => {

  /*
  productToAdd: id, name, imageUrl, price
  cartItem: id, name, imageUrl, price, quantity
  */

  //1.check if productToAdd already exists in cartItems
  const doesProductExistsInCart = cartItems.find(cartItem => {
    return cartItem.id === productToAdd.id;
  });

  //2. if productToAdd exist in cartItems, the product's quantity++
  if(doesProductExistsInCart){

    return cartItems.map(cartItem => (
      cartItem.id === productToAdd.id ? 
      {...cartItem, quantity: ++cartItem.quantity} :
      cartItem
    ));
  }

  //3.or return new array with cartItems + productToAdd with quantity
  return [...cartItems, {...productToAdd, quantity: 1}];
};

//helper function - increaseCount
const increaseCount = (cartItems, cartItemToIncrease) => {

  return cartItems.map(cartItem => (
    cartItem.id === cartItemToIncrease.id ? 
    {...cartItem, quantity: ++cartItem.quantity} :
    cartItem
  ));
};

//helper function - decreaseCount
const decreaseCount = (cartItems, cartItemToDecrease) => {

  if(cartItemToDecrease.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id);
  }

  return cartItems.map(cartItem => (
    cartItem.id === cartItemToDecrease.id ?
    {...cartItem, quantity: --cartItem.quantity} :
    cartItem
  ));
};

//helper function - removeItem
const removeItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
};

//context
export const CartContext = createContext({

  isCartOpen: false,
  setIsCartOpen: () => {},

  cartCount: 0,

  cartPriceTotal: 0,

  cartItems: [],
  addItemToCart: () => {},
  increaseCartItemCount: () => {},
  decreaseCartItemCount: () => {},
  removeItemFromCart: () => {},

});

//provider
export const CartContextProvider = ({children}) => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartPriceTotal, setCartPriceTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  //calculate cartCountTotal when cartItems change
  useEffect(() => {

    const newCartCount = cartItems.reduce((prevTotal, currentCartItem) => (
      prevTotal + currentCartItem.quantity
    ), 0);

    setCartCount(newCartCount);
  }, [cartItems]);

  //calculate cartPriceTotal when cartItems change
  useEffect(() => {

    const newCartPriceTotal = cartItems.reduce((prevTotal, currentCartItem) => (
      prevTotal + Number(currentCartItem.price) * currentCartItem.quantity
    ), 0);

    setCartPriceTotal(newCartPriceTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const increaseCartItemCount = (cartItemToIncrease) => {
    setCartItems(increaseCount(cartItems, cartItemToIncrease));
  };

  const decreaseCartItemCount = (cartItemToDecrease) => {
    setCartItems(decreaseCount(cartItems, cartItemToDecrease));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeItem(cartItems, cartItemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartCount,
    cartPriceTotal,
    addItemToCart,
    increaseCartItemCount,
    decreaseCartItemCount,
    removeItemFromCart,
    cartItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
};