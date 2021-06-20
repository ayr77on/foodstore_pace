import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import items from '../../items';
import ItemDetail from '../ItemDetail/ItemDetail';
const ItemDetailContainer = () => {
  var { id } = useParams();
  const [itemIndividual,setItemDetail] = useState([]);
  const [loadItemDetailContainer,setLoadItemDetailContainer] = useState(false);
  const getProductItem = new Promise((resolve, reject) => {
      setTimeout(function() {
        if(id){
          var item = items.find(obj => {
              return obj.id == id
          })
          resolve(item);
        }
      }, 2000);
    });

    useEffect(() => {
          getProductItem.then(dataItem => {
              setItemDetail(dataItem);
              setLoadItemDetailContainer(true);
          }).catch(error => {
              console.log("errror");
          });
    },[id]);
    return (
        <div className="containerList">
        {loadItemDetailContainer ? (
            <ItemDetail item={itemIndividual}/>
          ) : (
            <p>Cargando item...</p>
          )}
            
        </div>
    )
}

export default ItemDetailContainer
