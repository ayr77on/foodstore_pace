import React, {useContext} from 'react';
import { NavLink } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';

function CartWidget() {
  const { cart } = useContext(CartContext);
  let counter = Object.keys(cart).length;
  console.log(cart)
    return (
        <NavLink to="/cart" ><i className="material-icons">shopping_cart</i>{counter > 0 ? (<span class="badge">{counter}</span>) : (<span class="badge"></span>)}</NavLink>
    );
  }
  
export default CartWidget;