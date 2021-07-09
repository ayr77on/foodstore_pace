import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { getFirestore } from '../../factory/index.js';

const ItemListContainer = (props) => {
    var { id } = useParams();
    const [itemList,setItemList] = useState([]);
    const [load,setLoad] = useState("Cargando...");
      useEffect(() => {
            const db = getFirestore();
            const itemCollection = id ? db.collection('items').where('categoryId', '==', id) : db.collection('items');
            itemCollection
              .get()
              .then(querySnapshot => {
                if (querySnapshot.size === 0) {
                  console.log('No resultados');
                  setLoad(false);
                  return;
                }
                setItemList(querySnapshot.docs.map(doc => {
                  return { id: doc.id, ...doc.data() }
                }));
                console.log(querySnapshot.docs.map(doc => doc.data()))
                setLoad(false);
              })
              .catch(error => {
                console.log(error);
                setLoad(false);
              });
      },[id]);
    
    return (
        <div className="container">
            {load}
            <ItemList items={itemList} />
        </div>
    );
  }
  
export default ItemListContainer;