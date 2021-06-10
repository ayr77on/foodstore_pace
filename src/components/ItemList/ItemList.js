import React, { useEffect, useState }from 'react';
import Item from "../Item/Item";

const ItemList = ({items,i}) => {
    const [itemList,setItemList] = useState([]);
    const [load,setLoad] = useState("Cargando...");
    const getProductList = new Promise((resolve, reject) => {
        console.log('cargando...');
        setTimeout(function() {
          resolve(items);
        }, 2000);
      });

      useEffect(() => {
            getProductList.then(data => {
                setItemList(data);
                setLoad('');
                console.log(data,"b");
            });
      },[]);
    return(
        <div className="row containerList">
            {load}
            {itemList.map((item) => {
                return(
                    <div><Item item={item} key={i}/></div>
                );
            })} 
        </div>
    );
};
export default ItemList;