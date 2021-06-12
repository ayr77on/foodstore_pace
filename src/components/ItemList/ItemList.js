import React, { useEffect, useState } from 'react';
import Item from "../Item/Item";

const ItemList = ({items}) => {
    return(
        <div className="row containerList">
            {items.map((item,i) => {
                return(
                    <div><Item item={item} key={i}/></div>
                );
            })} 
        </div>
    );
};
export default ItemList;