import React, { createContext, useState } from 'react';



//context
export const CartContext = createContext({

  isCartOpen: false,
  setIsCartOpen: () => {},

});

//provider
export const CartContextProvider = ({children}) => {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const value = {
    isCartOpen,
    setIsCartOpen
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
};