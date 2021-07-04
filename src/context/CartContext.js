import React, { useContext, useState } from 'react';
const CartContext = React.createContext([]);

function CartProvider({ defaultValue = [], children }) {
    const [cart, setCart] = useState([]);
  
        
    const addItem = (product,quantity) => {
        let item = {
            item: product,
            quantity: quantity,
        };

        // var result = items.filter(obj => {
        //     return obj.item.id == product.id
        //   })

        
        setCart([...cart, item]);
        console.log(cart);
    }
    const removeItem = id => {
      return cart.find(x => x.id === id);
    }
    const clear = () => {
        setCart([]);
    }
    const isInCart = id => {
      return cart.find(x => x.item.id === id) ? true : false;
    }
    return (
      <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart}}  >
        {children}
      </CartContext.Provider>
    );
  }

export{
    CartContext,
    CartProvider,
};