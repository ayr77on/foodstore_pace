import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import items from '../../items';

const ItemListContainer = (props) => {
  var { id } = useParams();
    
    const [itemList,setItemList] = useState([]);
    const [load,setLoad] = useState("Cargando...");
    const getProductList = new Promise((resolve, reject) => {
        console.log('cargando...');
        setTimeout(function() {
          if(id){
            var result = items.filter(obj => {
              return obj.categoria_id == id
            })
          }else{
            var result = items;
          }
          resolve(result);
        }, 0);
      });

      useEffect(() => {
            getProductList.then(data => {
                setItemList(data);
                setLoad('');
            });
      },[id]);
    
    return (
        <div className="container">
            {/* {props.texto} */}
            {/* <ItemCount initial={1} stock={10} onAdd={onAdd} /> */}
            {load}
            <ItemList items={itemList} />
            
        </div>
    );
  }
  
export default ItemListContainer;