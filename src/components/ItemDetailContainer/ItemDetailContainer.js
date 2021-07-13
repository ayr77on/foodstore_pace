import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore } from '../../factory/index.js';
const ItemDetailContainer = () => {
  var { id } = useParams();
  const [itemIndividual,setItemDetail] = useState([]);
  const [loadItemDetailContainer,setLoadItemDetailContainer] = useState(false);
  const [errorItemDetail,setErrorItemDetail] = useState("Cargando Item...");
    useEffect(() => {
      const db = getFirestore();
      const itemCollection = db.collection('items');
      const item = itemCollection.doc(id);
      item
        .get()
        .then(doc => {
          if (!doc.exists) {
            setLoadItemDetailContainer(false);
            setErrorItemDetail("Hubo un error al buscar el producto");
          }else{
              setItemDetail([{ id: doc.id, ...doc.data()}]);
              setLoadItemDetailContainer(true);
          }
        })
        .catch(error => {
          setLoadItemDetailContainer(false);
        });
    },[id]);
    return (
        <div className="containerList">
        {loadItemDetailContainer ? (
            <ItemDetail item={itemIndividual}/>
          ) : (
            <p>{errorItemDetail}</p>
          )}
            
        </div>
    )
}

export default ItemDetailContainer
