import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { getFirestore } from '../../factory/index.js';

const ItemListContainer = (props) => {
    var { id } = useParams();
    const [itemList,setItemList] = useState([]);
    const [messageItemListContainer,setMessageItemListContainer] = useState("Cargando...");
      useEffect(() => {
            const db = getFirestore();
            const itemCollection = id ? db.collection('items').where('categoryId', '==', id) : db.collection('items');
            itemCollection
              .get()
              .then(querySnapshot => {
                if (querySnapshot.size === 0) {
                  setMessageItemListContainer("No resultados");
                  return;
                }
                setItemList(querySnapshot.docs.map(doc => {
                  return { id: doc.id, ...doc.data() }
                }));
                setMessageItemListContainer("");
              })
              .catch(error => {
                setMessageItemListContainer("Hubo un error");
              });
      },[id]);
    
    return (
        <div className="container">
            {messageItemListContainer}
            <ItemList items={itemList} />
        </div>
    );
  }
  
export default ItemListContainer;