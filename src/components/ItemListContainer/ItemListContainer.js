import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import items from '../../items';

const ItemListContainer = (props) => {
  var { id } = useParams();
    const onAdd = (items) => {
        console.log(`Agregaste ${items} items`);
    };
    // var items = [
    //   {id: 1 ,title: "Hamburguesa simple", categoria_id:1, price: 10,pictureUrl: "https://elcomercio.pe/resizer/roo19-8VYE0IESdf66sqDdlz-hE=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/TKMWLRYWQFDMJLPYHNIYBVTKDM.jpg" },
    //   {id: 2 ,title: "Hamburguesa doble", categoria_id:1, price: 10,pictureUrl: "https://elcomercio.pe/resizer/roo19-8VYE0IESdf66sqDdlz-hE=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/TKMWLRYWQFDMJLPYHNIYBVTKDM.jpg" },
    //   {id: 3 ,title: "Pizza napolitana", categoria_id:2, price: 20,pictureUrl: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/pizzapepperoni0.jpg" },
    //   {id: 4 ,title: "Pizza muzzarella", categoria_id:2, price: 20,pictureUrl: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/pizzapepperoni0.jpg" },
    //   {id: 3 ,title: "Milanesa", categoria_id:3, price: 30,pictureUrl: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/09/como-hacer-milanesa-sin-que-se-despegue-el-pan-molido.jpg" },
    //   {id: 4 ,title: "Empanada", categoria_id:4, price: 40,pictureUrl: "https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/recipe/5edd22d35bafe854db55f541/empanada-carne.jpg" }
    // ];
    const filterCategories = items => {
        return items.categoria_id == id;
    }
    
    const [itemList,setItemList] = useState([]);
    const [load,setLoad] = useState("Cargando...");
    const getProductList = new Promise((resolve, reject) => {
        console.log('cargando...');
        setTimeout(function() {
          if(id){
            items = items.filter(filterCategories);
            console.log(items,"filtrado")
          }
          resolve(items);
        }, 0);
      });

      useEffect(() => {
            getProductList.then(data => {
                setItemList(data);
                setLoad('');
            });
      },[id]);
    
    return (
        <div>
            {props.texto}
            {/* <ItemCount initial={1} stock={10} onAdd={onAdd} /> */}
            {load}
            <ItemList items={itemList} />
            
        </div>
    );
  }
  
export default ItemListContainer;