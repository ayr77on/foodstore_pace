import React from 'react';
import { NavLink } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="card col s3">
            <div className="card-image waves-effect waves-block waves-light">
            <NavLink  to={`/item/${item.id}`} >
                <img alt="" className="activator" src={item.imageId}/>
            </NavLink>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{item.title}</span>
                <p className="grey-text text-darken-4">${item.price}</p>
                <NavLink className="waves-effect waves-light btn" to={`/item/${item.id}`} ><i className="material-icons right">search</i>Ver</NavLink>
            </div>
            
        </div>
    );
};

export default Item;