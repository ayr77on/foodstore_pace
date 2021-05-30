// import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import NavBar  from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <p>Tienda de comida</p>
      </header>
    </div>
  );
}

export default App;
