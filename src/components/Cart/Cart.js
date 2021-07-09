import React, {useContext} from 'react';
import { NavLink } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

const Cart = ()=> {
    const { cart,clear,removeItem } = useContext(CartContext);
    var counter = Object.keys(cart).length;
    var total = 0;
    if (counter > 0){
        return (
            <ul className="collection">
                 {cart.map((cartItem,i) => {
                    total = total + (cartItem.item.price * cartItem.quantity)
                    return(
                        <li key={i} className="collection-item avatar">
                            <img src={cartItem.item.imageId} alt="" className="circle"/>
                            <span className="title textBlack">{cartItem.quantity} {cartItem.item.title} - ${cartItem.item.price * cartItem.quantity} </span>
                            <button onClick={() => removeItem(cartItem.item.id)} class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">cancel</i></button>
                        </li>
                    );
                })}
                <div>
                    <h5 class="center-align">Total : ${total}</h5>
                    {total > 0 && (
                        <div>
                            <button class="btn-large  waves-light red" onClick={() => clear()}>Limpiar carrito</button>
                        </div>
                    )}
                </div>        
            </ul>
        );
    }else{
        return (
            <NavLink className="btn-large  waves-light red" to="/">Agregar productos</NavLink>
        );
    }
   
}

export default Cart;