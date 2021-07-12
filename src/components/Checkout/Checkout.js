import React,{useState, useContext} from 'react';
import Swal from 'sweetalert2';
import { NavLink } from "react-router-dom";
import withReactContent from 'sweetalert2-react-content';
import { CartContext } from '../../context/CartContext';
import { getFirestore } from '../../factory/index.js';
import firebase from 'firebase';

const MySwal = withReactContent(Swal);

const Checkout = () => {
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [purchaseId, setPurchaseId] = useState("");
    const { cart,clear } = useContext(CartContext);
    var itemsCart = [];
    var total = 0;
    cart.map(function(cartItem) {
        let itemTemp = {
            id : cartItem.item.id,
            title : cartItem.item.title,
            price :cartItem.item.price,
            quantity :cartItem.quantity,
        }
         itemsCart.push(itemTemp);
         total = total + cartItem.item.price * cartItem.quantity;
    });

    const handleInputChange = (event) => {
        setBuyer({
            ...buyer,
            [event.target.name] : event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault();
        if(buyer.name === "" || buyer.email === "" || buyer.phone === "" ){
            MySwal.fire({
                title: 'Error!',
                text: 'Complete los campos para poder terminar la compra',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            return false;
        }else{
            MySwal.showLoading();
            const db = getFirestore();
            const order = db.collection('orders');
            const newOrder = {
                buyer: {
                  email: buyer.email,
                  name: buyer.name,
                  phone: buyer.phone
                },
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: total,
                items: itemsCart
            };
            order
            .add(newOrder)
            .then(({ id }) => {
                MySwal.close();
                setPurchaseId(id);
                clear();
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
    if (purchaseId !== ""){
        return (
            <div class="">
                <h3>Felicitaciones, su código de compra es : {purchaseId}</h3><br/>
                <NavLink className="btn-large  waves-light red" to="/">Hacer otro pedido</NavLink>
            </div>
        );
    }else{
        return (
            <div class="">
                <h3>Complete sus datos para terminar la compra</h3>
                <form onSubmit={enviarDatos}>
                    <div class="input-field col s6">
                        <input  name="name" placeholder="Nombre" onChange={handleInputChange} type="text" class="validate"/>
                    </div>
                    <div class="input-field col s6">
                        <input  name="email" placeholder="Email" onChange={handleInputChange} type="text" class="validate"/>
                    </div>
                    <div class="input-field col s6">
                        <input  name="phone" placeholder="Telefono" onChange={handleInputChange} type="text" class="validate"/>
                    </div>
                    <div class="input-field col s6">
                        <button type="submit" class="btn-large  waves-light red">Terminar Compra</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Checkout;