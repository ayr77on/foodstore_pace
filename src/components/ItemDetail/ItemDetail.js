import React from 'react'
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({item}) => {
    const onAdd = (items) => {
        console.log(`Agregaste ${items} items`);
    };
    return (
        <div className="card col s3">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={item.pictureUrl}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{item.title}</span>
                <p className="grey-text text-darken-4">{item.description}</p>
                <h5 className="grey-text text-darken-4">Ingredientes</h5>
                <ul className="grey-text text-darken-4">
                {item.ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                ))}
                </ul>
                {/* <a className="waves-effect waves-light btn"><i class="material-icons right">add</i>Agregar</a> */}
                <ItemCount initial={1} stock={10} onAdd={onAdd} />
            </div>
            
        </div>
    );
}

export default ItemDetail
