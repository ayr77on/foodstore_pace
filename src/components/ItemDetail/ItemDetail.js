import React from 'react'

const ItemDetail = ({item}) => {
    console.log("itemDetail",item)
    return (
        <div className="card col s3">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={item[0].pictureUrl}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{item[0].title}</span>
                <p className="grey-text text-darken-4">{item[0].description}</p>
                <h5 className="grey-text text-darken-4">Ingredientes</h5>
                <ul className="grey-text text-darken-4">
                {item[0].ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                ))}
                </ul>
                <a class="waves-effect waves-light btn"><i class="material-icons right">add</i>Agregar</a>
            </div>
            
        </div>
    );
}

export default ItemDetail
