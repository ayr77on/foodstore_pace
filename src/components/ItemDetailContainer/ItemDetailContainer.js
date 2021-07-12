import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore } from '../../factory/index.js';
const ItemDetailContainer = () => {
  var { id } = useParams();
  const [itemIndividual,setItemDetail] = useState([]);
  const [loadItemDetailContainer,setLoadItemDetailContainer] = useState(false);
    useEffect(() => {
      const db = getFirestore();
      const itemCollection = db.collection('items');
      const item = itemCollection.doc(id);
      item
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.log('Item no encontrado');
          }else{
              console.log('Item encontrado',doc.data());
              setItemDetail([{ id: doc.id, ...doc.data()}]);
              setLoadItemDetailContainer(true);
          }
        })
        .catch(error => {
          console.log(error);
          setLoadItemDetailContainer(false);
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
