import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import NavBar  from './components/NavBar/NavBar';
import { BrowserRouter ,Switch,Route} from "react-router-dom";
import ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import {CartProvider} from './context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
        <Switch>
        <div className="App-header">
          <Route exact path="/">
            <ItemListContainer  texto="Explora nuestras mejores recetas..."/>
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer  texto="Explora nuestras mejores recetas..."/>
          </Route>
            <Route exact path="/item/:id">
                <ItemDetailContainer />
            </Route>
            <Route exact path="/cart" >
                <Cart />
            </Route>
            <Route exact path="/Checkout" >
                <Checkout />
            </Route>
        </div>
        </Switch> 
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
