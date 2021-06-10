import React from 'react';

const Item = ({item,i}) => {
    return (
        <div key={i} className="card col s3">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={item.pictureUrl}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{item.title}</span>
                <a class="waves-effect waves-light btn"><i class="material-icons right">add</i>Agregar</a>
            </div>
            
        </div>
    );
};

export default Item;