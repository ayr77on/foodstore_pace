import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [itemIndividual,setItemDetail] = useState([]);
    const [loadItemDetailContainer,setLoadItemDetailContainer] = useState(false);
    const item = [
        {id: 1 ,title: "Hamburguesa 1", price: 10,description: "Hecho a base de carne molida o de origen vegetal, aglutinada en forma de filete cocinado a la parrilla",ingredients:["Lechuga","Tomate","Queso","Medallon de carne"],pictureUrl: "https://elcomercio.pe/resizer/roo19-8VYE0IESdf66sqDdlz-hE=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/TKMWLRYWQFDMJLPYHNIYBVTKDM.jpg" }
    ];
    const getProductItem = new Promise((resolve, reject) => {
        setTimeout(function() {
          resolve(item);
        }, 2000);
      });

      useEffect(() => {
            getProductItem.then(dataItem => {
                setItemDetail(dataItem[0]);
                setLoadItemDetailContainer(true);
            }).catch(error => {
                console.log("errror");
            });
      },[]);
    return (
        <div className="containerList">
        {loadItemDetailContainer ? (
            <ItemDetail item={itemIndividual}/>
          ) : (
            <p>Cargando item detail container..</p>
          )}
            
        </div>
    )
}

export default ItemDetailContainer
