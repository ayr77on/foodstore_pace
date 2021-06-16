// import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import NavBar  from './components/NavBar/NavBar';
import { BrowserRouter ,Switch,Route,Link } from "react-router-dom";
import ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
        <div className="App-header">
          <ItemListContainer texto="Explora nuestras mejores recetas..."/>
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
