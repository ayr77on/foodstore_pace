import React, { useState } from 'react';
const CartContext = React.createContext([]);

function CartProvider({ defaultValue = [], children }) {
    const [cart, setCart] = useState([]);
  
        
    const addItem = (product,quantity) => {
        var item = {
            item: product,
            quantity: quantity,
        };
        var result = cart.findIndex(function(object) {
            return object.item.id == product.id;
        });
        if(result != -1){
            let newCart = [...cart];
            newCart[result]["quantity"] = newCart[result].quantity + quantity;
            setCart(newCart);
        }else{
            setCart([...cart, item]);
        }
    }
    const removeItem = id => {
        setCart(cart.filter(i => i.item.id !== id));
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