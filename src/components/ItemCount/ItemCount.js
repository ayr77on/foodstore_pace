import React, { useState, useContext } from 'react';
import './ItemCount.css';
import { CartContext } from '../../context/CartContext';

const ItemCount = ({initial,stock,onAdd,product}) => {
    const [items, setContador] = useState(initial);
    const { addItem } = useContext(CartContext);
    const sumItem = () => {
        if(items < stock){
            setContador(items+1)
        }else{
            alert("No podes agregar mas productos");
        }
    };
    const reduceItem = () => {
        if(items > initial){
            setContador(items-1)
        }else{
            alert("No podes restar productos");
        }
    };
    return (
        <div className="justify-content-between align-items-center">
            <div className="flex-container">
                <input type="button" onClick={reduceItem} value="-" className="minus btn-floating btn-large waves-effect waves-light red"/>
                <input type="number" name="quantity" value={items} title="Qty" className="quantity" />
                <input type="button" onClick={sumItem} value="+" className="plus btn-floating btn-large waves-effect waves-light red"/>
            </div>
            <button onClick={() => addItem(product,items)} className="waves-effect waves-light btn red">Agregar al carrito</button>  
        </div>
    );
  }
  
export default ItemCount;