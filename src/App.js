// import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import NavBar  from './components/NavBar/NavBar';
import ItemListContainer  from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="App-header">
      <ItemListContainer texto="Explora nuestras mejores recetas..."/>
      </div>
    </div>
  );
}

export default App;
