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

//context
export const CartContext = createContext({

  isCartOpen: false,
  setIsCartOpen: () => {},

  cartCount: 0,

  cartItems: [],
  addItemToCart: () => {},

});

//provider
export const CartContextProvider = ({children}) => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    const newCartCount = cartItems.reduce((prevTotal, currentCartItem) => (
      prevTotal + currentCartItem.quantity
    ), 0);

    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartCount,
    addItemToCart,
    cartItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
};