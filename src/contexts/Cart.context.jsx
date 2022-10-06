import React, { createContext, useState } from 'react';



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

//context
export const CartContext = createContext({

  isCartOpen: false,
  setIsCartOpen: () => {},

  cartItems: [],
  addItemToCart: () => {},

});

//provider
export const CartContextProvider = ({children}) => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
};