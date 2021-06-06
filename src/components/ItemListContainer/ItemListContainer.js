import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer (props) {
    const onAdd = (items) => {
        console.log(`Agregaste ${items} items`);
    };
    
    return (
        <div>
            {props.texto}
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    );
  }
  
export default ItemListContainer;