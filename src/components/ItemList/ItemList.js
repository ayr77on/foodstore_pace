import React from 'react';
import Item from "../Item/Item";

const ItemList = ({items}) => {
    return(
        <div className="row containerList">
            {items.map((item,i) => {
                return(
                    <div key={i}><Item item={item}/></div>
                );
            })} 
        </div>
    );
};
export default ItemList;