// import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import NavBar  from './components/NavBar/NavBar';
import { BrowserRouter ,Switch,Route,Link,useParams } from "react-router-dom";
import ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import items from './items';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
        <div className="App-header">
          <Route exact path="/">
            <ItemListContainer  texto="Explora nuestras mejores recetas..."/>
          </Route>
          <Route exact path="/categoria/:id">
            <ItemListContainer  texto="Explora nuestras mejores recetas..."/>
          </Route>
          <ItemDetailContainer/>
          <Route >

          </Route>
        </div>
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
