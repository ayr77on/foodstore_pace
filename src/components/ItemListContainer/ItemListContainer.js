import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

function ItemListContainer (props) {
    const onAdd = (items) => {
        console.log(`Agregaste ${items} items`);
    };
    const items = [
        {id: 1 ,title: "Hamburguesa 1", price: 10,pictureUrl: "https://elcomercio.pe/resizer/roo19-8VYE0IESdf66sqDdlz-hE=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/TKMWLRYWQFDMJLPYHNIYBVTKDM.jpg" },
        {id: 2 ,title: "Pizza", price: 20,pictureUrl: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/pizzapepperoni0.jpg" },
        {id: 3 ,title: "Milanesa", price: 30,pictureUrl: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/09/como-hacer-milanesa-sin-que-se-despegue-el-pan-molido.jpg" },
        {id: 4 ,title: "Empanada", price: 40,pictureUrl: "https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/recipe/5edd22d35bafe854db55f541/empanada-carne.jpg" }
    ];
    
    return (
        <div>
            {props.texto}
            {/* <ItemCount initial={1} stock={10} onAdd={onAdd} /> */}
            <ItemList items={items} />
        </div>
    );
  }
  
export default ItemListContainer;