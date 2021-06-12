import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const item = [
        {id: 1 ,title: "Hamburguesa 1", price: 10,description: "Hecho a base de carne molida o de origen vegetal, aglutinada en forma de filete cocinado a la parrilla",ingredients:["Lechuga","Tomate","Queso","Medallon de carne"],pictureUrl: "https://elcomercio.pe/resizer/roo19-8VYE0IESdf66sqDdlz-hE=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/TKMWLRYWQFDMJLPYHNIYBVTKDM.jpg" }
    ];
    return (
        <div className="containerList">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer
