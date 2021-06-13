// import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import NavBar  from './components/NavBar/NavBar';
import ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="App-header">
      <ItemListContainer texto="Explora nuestras mejores recetas..."/>
      <ItemDetailContainer/>
      </div>
    </div>
  );
}

export default App;
