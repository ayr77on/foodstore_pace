import React, {useState} from 'react'
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
const ItemDetail = ({item}) => {
    const [itemAdd,setItemAdd] = useState(0);
    const onAdd = (items) => {
        setItemAdd(itemAdd+1);
    };
    return (
        <div className="card col s3">
            <div className="card-image waves-effect waves-block waves-light">
                <img alt="" className="activator" src={item[0].imageId}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{item[0].title}</span>
                <p className="grey-text text-darken-4">{item[0].description}</p>
                <p className="grey-text text-darken-4">${item[0].price}</p>
                <h5 className="grey-text text-darken-4">Ingredientes</h5>
                {itemAdd >= 1 ? (
                    <Link className="waves-effect waves-light btn" to="/cart">Terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={10} onAdd={onAdd} product={item[0]} />
                )}                
            </div>
        </div>
    );
}

export default ItemDetail
